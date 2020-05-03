require('./config/config');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const client = MongoClient(process.env.UrlDataBase, { useUnifiedTopology: true });

client.connect((err: any)=> {
  if(err) throw err;
  console.log("Connected successfully to server");
  
  client.close();
})
app.listen(() => {
    console.log('server running');
})