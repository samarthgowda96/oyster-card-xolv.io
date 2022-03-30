import helloWorldResolver from "./helloWorldResolver"
import OysterCardResolver from "./oystercard.resolver";
import TripServiceResolver from "./starttrip.resolver"


export const resolvers = [helloWorldResolver, OysterCardResolver,TripServiceResolver] as const;