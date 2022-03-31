import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {CreateJourneyInput, Trip} from '../schema/starttrip.schema'
import TripService from "../service/starttrip.service";
import { OysterCard } from "../schema/oystercard.schema";

// Mutation and Queries for Demostrate Journey service
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

    @Query(() => OysterCard)
    exitTrip(@Arg("input") input: CreateJourneyInput){
        return this.startTripService.exitTrip(input)
    }



}