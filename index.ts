import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import Express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import {connect} from 'mongoose';
const app = Express();
dotenv.config();

const mangoose = connect(`mongodb+srv://${process.env.USER}:${process.env.DB_PASSWORD}@cluster0.jippb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)


app.listen(7000, ()=>{
    console.log("listening on port 5000")
})