import {prop} from "@typegoose/typegoose"
import {Field, ObjectType} from "type-graphql"

@ObjectType()
export class helloWorldSchema {
    @Field(()=>String)
    _id:string

    @Field(()=>String)
    @prop({required: true})
    message:string

    @Field(()=>String)
    ping:string

}