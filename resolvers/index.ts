import helloWorldResolver from "./helloWorldResolver"
import UserResolver from "./user.resolvers"

export const resolvers = [helloWorldResolver, UserResolver] as const;