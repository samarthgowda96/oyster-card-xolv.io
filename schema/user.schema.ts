import {getModelForClass, prop} from "@typegoose/typegoose"
import { IsEmail, MinLength } from "class-validator";
import {Field, InputType,ObjectType} from "type-graphql"
@ObjectType()
export class User {
    @Field(()=> String)
    _id: string;

    @Field(()=> String)
    @prop({required: true})
    name: string;

    @Field(()=>String)
    @prop({required: true})
    email: string;

    @Field(()=> String)
    total_balance: string;

}

export const UserModel = getModelForClass(User);

@InputType()
export class CreateUserInput{
    @Field(() => String)
    name: string;

    @IsEmail()
    @Field(() => String)
    email: string;

    @MinLength(6,{
        message:"password is too short!"

    })
    @Field(() => String)
    password: string;

    @Field(() => String)
    total_balance: string;
}
