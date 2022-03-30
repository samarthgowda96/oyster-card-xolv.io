import { TripModel,CreateJourneyInput } from "../schema/starttrip.schema";
import {OysterCardModel} from "../schema/oystercard.schema";
import STATIONS from "../constants/station.constants";
import {ModeOfTransport} from "../constants/transport.constants";
import {fares, Station} from "../constants/fares.constants";

class TripService{
    private balance :number;
    private fareCharged:number;
    private journey:Station[];

    constructor(amount = 0) {
        this.balance = amount;
        this.fareCharged = 0;
        this.journey = [];
    }

    set Balance(amt: number) {
        this.balance = amt;
    }
    get Balance(): number {
        return this.balance;
    }

    async createTrip(input:any){
        return TripModel.create(input);
    }
    async swipeTrip(input: CreateJourneyInput){
        const userOysterCard = await OysterCardModel.find({user_id: input.userId})
        const userBalance =  userOysterCard[0].total_balance
        this.balance = userBalance
        //console.log("in",this.balance)

        
    
        //console.log("out", this.balance)

        this.fareCharged = input.mode === ModeOfTransport.BUS? fares.ANY_BUS_TRIP: fares.MAX_FARE;
        if (this.balance < this.fareCharged) {
            console.log("You don't have minimum balance, please recharge!")
        }
        this.balance = this.balance - this.fareCharged ;
        //console.log(typeof(input.mode), input.mode)
        //console.log(typeof(ModeOfTransport.BUS),ModeOfTransport.BUS)
        
        if (input.mode!== ModeOfTransport.BUS) {
            const station = input.station
            const currentStation = Object.getOwnPropertyDescriptor(STATIONS,station)
            this.journey[0] = currentStation?.value;
            console.log(this.journey[0])
        }
        return userOysterCard;
    }
}

export default TripService;