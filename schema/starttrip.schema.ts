import {getModelForClass, prop} from "@typegoose/typegoose"
import { IsEmail, MinLength } from "class-validator";
import {Field, ID, InputType,ObjectType} from "type-graphql"

//Trip Model Definition, Testing only, TODO: Link user_id
@ObjectType()
export class Trip {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    @prop({required: true})
    station: string;

    @Field(() => String)
    @prop({required: true})
    userId: string;

    @Field(() => String)
    @prop({required: true})
    mode: string;
    
}
export const TripModel = getModelForClass(Trip);


// Definition of input for Trip Service
@InputType()
export class CreateJourneyInput{
    
    @Field(() =>String)
    userId: string;

    @Field(() => String)
    station: string;

    @Field(() => String)
    mode: string;

}