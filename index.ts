import { ApolloServer } from "apollo-server-express"
import {
    ApolloServerPluginLandingPageGraphQLPlayground
  } from "apollo-server-core";
import  {buildSchema} from  "type-graphql"
import express from 'express';
import 'reflect-metadata';
import {resolvers} from "./resolvers"
import {connectdb} from './config/dbconnection'


// Server || Express setup
(async () =>{
    const schema = await buildSchema({
        resolvers,
    })
    const app = express();
    const server = new ApolloServer({
        schema,
        
        plugins:[
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    })
      await server.start()
      server.applyMiddleware({app});
      app.listen({ port: 4000 }, () => {
        console.log("Server is listening on http://localhost:4000");
      });
      connectdb();
    
})();



 
