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
import Context from "./types/context";
import { User } from "./schema/user.schema";
import {connectdb} from './config/dbconnection'

(async () =>{
    
    const schema = await buildSchema({
        resolvers,
    })
    const app = express();
    const server = new ApolloServer({
        schema,
        context: (ctx: Context) => {
            const context = ctx;
      
           /*  if (ctx.req.cookies. accessToken) {
              const user = verifyJwt<User>(ctx.req.cookies.accessToken);
              context.user = user;
            } */
            return context;
          },
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



 
