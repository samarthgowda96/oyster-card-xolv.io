import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {CreateOysterCardInput, OysterCard} from '../schema/oystercard.schema'
import OysterCardService from "../service/oystercard.service";


@Resolver()
export default class OysterCardResolver{
    constructor(private oysterCardService: OysterCardService){
        this.oysterCardService = new OysterCardService();
    }

    @Mutation(() => OysterCard)
    reloadOysterCard(@Arg('input')input: CreateOysterCardInput){
        return this.oysterCardService.reloadOysterCard(input)
    }

   
  
}  
