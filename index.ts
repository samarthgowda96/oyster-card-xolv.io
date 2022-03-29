import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express"
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageProductionDefault,
  } from "apollo-server-core";
import  {buildSchema} from  "type-graphql"
import express from 'express';
import 'reflect-metadata';
import {resolvers} from "./resolvers"
import {connect} from 'mongoose';

(async () =>{
    const mangoose =  connect(`mongodb+srv://${process.env.USER}:${process.env.DB_PASSWORD}@cluster0.jippb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    const schema = await buildSchema({
        resolvers,
    })
    const app = express();
    const server = new ApolloServer({
        schema,
    })
      await server.start()
      server.applyMiddleware({app});

     
    //app.use(cookieParser())
    app.listen({ port: 4000 }, () => {
        console.log("App is listening on http://localhost:4000");
      });
    
})();



 
