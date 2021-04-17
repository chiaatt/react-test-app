/*
 Registration & Login Service
*/
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

/*
 This function registers a user in the db if the user doesn't exist
*/
async function dbQuery(users, userDetails) {
    const user = await users.find({email: userDetails.email}).toArray();
    //If user already exists - based on email then throw an error
    if (user && user.length > 0) {
        return {result: "User already exists"};
    } else {
        const userInsert = await users.insertOne(userDetails);
        if (userInsert){
            return {result: "Registration Successful"};
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
