import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {CreateJourneyInput, Trip} from '../schema/starttrip.schema'
import TripService from "../service/starttrip.service";

import { OysterCard } from "../schema/oystercard.schema";

@Resolver()
export default class TripServiceResolver{
    constructor(private startTripService: TripService){
        this.startTripService = new TripService();
    }

    @Mutation(() =>Trip)
    createTrip(@Arg('input') input: CreateJourneyInput){
    
        return this.startTripService.createTrip(input)

    }

    @Query(() => OysterCard)
    swipeTrip(@Arg("input") input: CreateJourneyInput){
        return this.startTripService.swipeTrip(input)
    }


}