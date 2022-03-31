import { Query, Resolver } from "type-graphql";
import { helloWorldSchema } from "../schema/helloWorldSchema";

@Resolver() //First test resolver in TS
export default class helloWorldResolver{
    @Query(() => helloWorldSchema,{nullable:true})
    ping(){
        return {
            message:"Hello GraphQL"
        }

    }
}  