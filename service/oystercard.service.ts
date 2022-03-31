import { OysterCardModel, CreateAuthInput  } from "../schema/oystercard.schema";

class OysterCardService{
    // To Reload balance 
    async reloadOysterCard(input:any){
        return OysterCardModel.create(input);
    }
    // To View Oyster Card
    async viewOysterCard(input:CreateAuthInput){
        return OysterCardModel.findOne(input).lean()

    }
}

export default OysterCardService;