import helloWorldResolver from "./helloWorldResolver"
import UserResolver from "./user.resolvers"
import OysterCardResolver from "./oystercard.resolver";

export const resolvers = [helloWorldResolver, UserResolver, OysterCardResolver] as const;