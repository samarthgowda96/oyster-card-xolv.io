
import { ApolloServer } from "apollo-server-express"
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageProductionDefault,
  } from "apollo-server-core";
import  {buildSchema} from  "type-graphql"
import express from 'express';
import 'reflect-metadata';
import {resolvers} from "./resolvers"



import {connectdb} from './config/dbconnection'

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

     
    //app.use(cookieParser())
    app.listen({ port: 4000 }, () => {
        console.log("App is listening on http://localhost:4000");
      });
      connectdb();
    
})();



 
