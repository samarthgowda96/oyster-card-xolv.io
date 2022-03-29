import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server-express"
import { createConnection } from "typeorm";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import  {buildSchema} from  "type-graphql"
import Express from 'express';
import 'reflect-metadata';
import {resolvers} from "./resolvers"

import {connect} from 'mongoose';
import { Plugins } from "@typegoose/typegoose";

const app = Express();

const mangoose =  connect(`mongodb+srv://${process.env.USER}:${process.env.DB_PASSWORD}@cluster0.jippb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
async () =>{
    const schema = await buildSchema({
        resolvers,
    })
    const app = Express();
    const server = new ApolloServer({
        schema
        
        
      });
      await server.start();
      server.applyMiddleware({app, cors:false});

     
    //app.use(cookieParser())
    
}



 
app.listen(7000, ()=>{
    console.log("listening on port 7000")
})