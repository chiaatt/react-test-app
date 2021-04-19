/*
 Session Service
*/
const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
require('dotenv').config()

//This function checks if a user in the db exists - if yes, a JWT token is generated
async function setUserSession(users, userDetails) {
    //Lookup if user exists
    const user = await users.find({email: userDetails.email, password: userDetails.password}).toArray();
    
    //If user is found
    if (user && user.length > 0) {
        //Generate access token that will expire after 1hr
        const token = jwt.sign(userDetails, process.env.TOKEN_SECRET, { expiresIn: '3600s' });
        return {user: userDetails, token: token};
    } else {
        return {
            key: "USER_NOT_FOUND",
            message: "User Not Found"
        }
    }
}

const login = async function(userDetails) {
    const connectionString = process.env.DATABASE_URL;  
    const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true});
    //Database
    const db = client.db('react-test');
    //Collection
    const users = db.collection('users');

    const result = await setUserSession(users, userDetails);

    return result;
}

module.exports = {
    login
};
