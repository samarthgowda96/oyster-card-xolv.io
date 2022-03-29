import { Query, Resolver } from "type-graphql";
import { helloWorldSchema } from "../schema/helloWorldSchema";
@Resolver()
export default class helloWorldResolver{
    @Query(() => helloWorldSchema,{nullable:true})
    ping(){
        return {
            message:"Hello GraphQL"
        }

    }
}  