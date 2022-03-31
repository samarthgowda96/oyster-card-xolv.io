import { TripModel,CreateJourneyInput } from "../schema/starttrip.schema";
import {OysterCardModel} from "../schema/oystercard.schema";
import STATIONS from "../constants/station.constants";
import {ModeOfTransport} from "../constants/transport.constants";
import {fares, Station} from "../constants/fares.constants";

class TripService{
    private balance :number;  // definition
    private fareCharged:number;
    private journey:Station[];

    constructor(amount = 0) { // initial values
        this.balance = amount;
        this.fareCharged = 0;
        this.journey = [];
    }

    set Balance(amt: number) { //getters and setters
        this.balance = amt;
    }
    get Balance(): number {
        return this.balance;
    }
    
    async createTrip(input:any){ //Test only
        return TripModel.create(input);
    }
    //Entery point of the trip
    async swipeTrip(input: CreateJourneyInput){
        this.fareCharged = 0;
        const userOysterCard = await OysterCardModel.find({user_id: input.userId})
        const userBalance =  userOysterCard[0].total_balance
        this.balance = userBalance
       
        
        this.fareCharged = input.mode === ModeOfTransport.BUS? fares.ANY_BUS_TRIP: fares.MAX_FARE;
        //Check the balance of the user
        if (this.balance < this.fareCharged) { //return message in future
            console.log("You don't have minimum balance, please recharge!");
            
        }
        this.balance = this.balance - this.fareCharged;

        await OysterCardModel.findOneAndUpdate({  // Update user balance
            "_id": input.userId
          }, { $set: { total_balance: this.balance} 
          }).exec()
        if (input.mode!== ModeOfTransport.BUS) {
            const inputstation = input.station
            const currentStation = Object.getOwnPropertyDescriptor(STATIONS,inputstation)
            this.journey[0] = currentStation?.value;
            
        }
        return OysterCardModel.findOne(input).lean()
    }
    distanceTravelled(): number { // to distance travelled
        return this.calculateZonesTravelled(this.journey[0].zone, this.journey[1].zone);

    }
    //Calculate no of zones travelled
    calculateZonesTravelled(from: number[], to: number[]): number {
        let count = 0;
        from.forEach((fromZone) => {
            to.forEach((toZone) => {
                count = Math.abs(fromZone - toZone) + 1;
            });
        });
        return count;
    }
    //Find cost of tube 
    findTubeFare(zonesTravelled: number, journey: Station[]): number {
        const from = journey[0].zone, to = journey[1].zone;
        console.log(from, to)

        if (zonesTravelled === 2 && !from.includes(1) && to.includes(1)) {
            return fares.ANYWHERE_IN_ZONE1;
        }
        if (zonesTravelled === 2 && from.includes(1) && !to.includes(1)) {
            return fares.ONE_ZONE_OUTSIDE_ZONE1;
        }
        if (zonesTravelled === 2 && from.includes(1) && to.includes(1)) {
            return fares.TWO_ZONE_INCLUDING_ZONE1;
        }
        if (zonesTravelled === 2 && !from.includes(1) && !to.includes(1)) {
            return fares.TWO_ZONE_EXCLUDING_ZONE1;
        }
        if (zonesTravelled === 3) {
            return fares.THREE_ZONES;
        }
        return fares.MAX_FARE;
    }
    // Exit point of the trip
    async exitTrip(input:CreateJourneyInput){
        if(input.mode === ModeOfTransport.BUS){
            await OysterCardModel.findOneAndUpdate({
                "_id": input.userId
              }, { $set: { total_balance: this.balance} 
              }).exec()
            return OysterCardModel.findOne(input).lean()
        }
        const station = input.station;
        const currentStation =  Object.getOwnPropertyDescriptor(STATIONS,station);
        this.journey[1] = currentStation?.value;
        this.fareCharged = this.findTubeFare(this.distanceTravelled(), this.journey);
        //Adding Deducted MAX_FARE back 
        this.balance = (this.balance + fares.MAX_FARE) - this.fareCharged;

        return OysterCardModel.findOneAndUpdate({
            "_id": input.userId
          }, { $set: { total_balance: this.balance} 
          }).exec()
          .then(() => OysterCardModel.findOne(input).lean());
        }
}
    
    
        

export default TripService;