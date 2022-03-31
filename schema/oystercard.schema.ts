import {getModelForClass, prop} from "@typegoose/typegoose"
import { IsEmail, MinLength } from "class-validator";
import {Field, InputType,ObjectType} from "type-graphql"

@ObjectType()
export class OysterCard {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    @prop({required: true, unique: true})
    email: string;

    @Field((_type) => Number)
    @prop({required: true})
    total_balance: number;
    
}

export const OysterCardModel = getModelForClass(OysterCard);

@InputType()
export class CreateOysterCardInput{
    @IsEmail()
    @Field(() => String)
    email: string;
    
    @Field(() => Number)
   total_balance: number;

}


