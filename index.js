"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const type_graphql_1 = require("type-graphql");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const resolvers_1 = require("./resolvers");
const dbconnection_1 = require("./config/dbconnection");
// Server || Express setup
(async () => {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: resolvers_1.resolvers,
    });
    const app = (0, express_1.default)();
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()
        ]
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () => {
        console.log("Server is listening on http://localhost:4000");
    });
    (0, dbconnection_1.connectdb)();
})();
