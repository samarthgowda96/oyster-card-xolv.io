# OYSTER CARD PROBLEM ###
```
1) npm install (delete node-modules if required)
2) npx tsc (compile TS into JS)
3) npx nodemon index.js (Run the the server at port 4000)
```

# Recharge your oyster card mutation 
```
mutation reloadOysterCard($input:CreateOysterCardInput!){
  reloadOysterCard(input:$input){
	_id
    email
    total_balance
  }
}
```
# View your oyster card balance Query
```
query viewOysterCard($input:CreateAuthInput!){
 viewOysterCard(input:$input){
    _id
  	email
    total_balance
  }
} 
```

# enter station trip query
```
query swipeTrip($input:CreateJourneyInput!){
  swipeTrip(input:$input){
	_id
    email
    total_balance
  }
}
```
# exit station trip query
```
query exitTrip($input:CreateJourneyInput!){
  exitTrip(input:$input){
	_id
    email
    total_balance
  }
}

```

# schema
```
type Query {
  ping: helloWorldSchema
  viewOysterCard(input: CreateAuthInput!): OysterCard!
  swipeTrip(input: CreateJourneyInput!): OysterCard!
  exitTrip(input: CreateJourneyInput!): OysterCard!
}

type helloWorldSchema {
  _id: String!
  message: String!
  ping: String!
}

type OysterCard {
  _id: String!
  email: String!
  total_balance: Float!
}

input CreateAuthInput {
  _id: String!
}

input CreateJourneyInput {
  userId: String!
  station: String!
  mode: String!
}

type Mutation {
  reloadOysterCard(input: CreateOysterCardInput!): OysterCard!
  createTrip(input: CreateJourneyInput!): Trip!
}

input CreateOysterCardInput {
  email: String!
  total_balance: Float!
}

type Trip {
  _id: String!
  station: String!
  userId: String!
  mode: String!
}
```
