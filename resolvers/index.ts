import helloWorldResolver from "./helloWorldResolver"
import OysterCardResolver from "./oystercard.resolver";
import TripServiceResolver from "./starttrip.resolver"

//Exporting all the resolvers as const
export const resolvers = [helloWorldResolver, OysterCardResolver,TripServiceResolver] as const;