import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {CreateOysterCardInput, OysterCard, CreateAuthInput} from '../schema/oystercard.schema'
import OysterCardService from "../service/oystercard.service";

// Mutation and Queries for OyserCard Model
@Resolver()
export default class OysterCardResolver{
    constructor(private oysterCardService: OysterCardService){
        this.oysterCardService = new OysterCardService();
    }

    @Mutation(() => OysterCard)
    reloadOysterCard(@Arg('input')input: CreateOysterCardInput){
        return this.oysterCardService.reloadOysterCard(input)
    }

    @Query(() => OysterCard)
    viewOysterCard(@Arg("input") input: CreateAuthInput){
        return this.oysterCardService.viewOysterCard(input)
    }

   
  
}  
