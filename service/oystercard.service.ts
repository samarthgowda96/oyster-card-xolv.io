import { OysterCardModel } from "../schema/oystercard.schema";

class OysterCardService{
    async reloadOysterCard(input:any){
        return OysterCardModel.create(input);
    }
}

export default OysterCardService;