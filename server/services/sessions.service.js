/*
 Session Service
*/
const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
require('dotenv').config()

/*
 This function checks if a user in the db exists - if yes, a JWT token is generated
*/
async function dbQuery(users, userDetails) {
    const user = await users.find({email: userDetails.email, password: userDetails.password}).toArray();
    
    //If user & password matches then create a token
    if (user && user.length > 0) {
        //Generate access token that will expire after 30mins
        const token = jwt.sign(userDetails, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
        return {user: userDetails, token: token};
    } else {
        return {message: "User Not Found"}
    }
}

const login = async function(userDetails) {
    const connectionString = process.env.DATABASE_URL;  
    const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true});
    const db = client.db('react-test');
    const users = db.collection('users');
    const result = await dbQuery(users, userDetails);

    return result;
}

module.exports = {
    login
};
