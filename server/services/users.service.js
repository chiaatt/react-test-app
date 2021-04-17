/*
 User Service
*/
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const session = require('./sessions.service')

/*
 This function registers a user in the db if the user doesn't exist
*/
async function dbQuery(users, userDetails) {
    //Query if the user exists
    const user = await users.find({email: userDetails.email}).toArray();
    //If user already exists - based on email then throw an error
    if (user && user.length > 0) {
        return {message: "User already exists"};
    } else {
        //Create user record in the db
        const userInsert = await users.insertOne(userDetails);
        if (userInsert){
            //Create a session for the user
            return session.login(userDetails);
        }
    };
}

const registerUser = async function(userDetails) {
    const connectionString = process.env.DATABASE_URL;  
    const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true});
    const db = client.db('react-test');
    const users = db.collection('users');
    const result = await dbQuery(users, userDetails);

    return result;
}

module.exports = {
    registerUser
};
