const mongodb = require("mongodb")
require("dotenv").config()

const MongoClient = mongodb.MongoClient;
const DB_URL = process.env.DB_URL


async function getDatabase(){  

    try{
        const client = await MongoClient.connect(DB_URL);
        database = client.db("Portfolio")

        if(!database)
            console.log("Database not connected");

        console.log("Database successfully connected");

        return database;
    }
    catch(e){
        console.log("DataBase connection error");
    }

}

module.exports = {getDatabase}
