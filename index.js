"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const resolvers_1 = require("./resolvers");
const mongoose_1 = require("mongoose");
(async () => {
    const mangoose = (0, mongoose_1.connect)(`mongodb+srv://${process.env.USER}:${process.env.DB_PASSWORD}@cluster0.jippb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: resolvers_1.resolvers,
    });
    const app = (0, express_1.default)();
    const server = new apollo_server_express_1.ApolloServer({
        schema,
    });
    await server.start();
    server.applyMiddleware({ app });
    //app.use(cookieParser())
    app.listen({ port: 4000 }, () => {
        console.log("App is listening on http://localhost:4000");
    });
})();
