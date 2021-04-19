/*
 Spins Service
*/
const { response } = require("express");
const MongoClient = require('mongodb').MongoClient;

const APPLE = "apple";
const BANANA = "banana";
const CHERRY = "cherry";
const LEMON = "lemon";

const spin = async function(req, res){
    const walletBalance =  await getUserWallet(req.userId);
    
    //If the user balance is 0 don't let him/her play
    if (walletBalance === 0) {
        return {
            key: "NO_FUNDS",
            message: "Not enough money in wallet"
        };
    }

    const reelOne = [CHERRY, LEMON, APPLE, LEMON, BANANA, BANANA, LEMON, LEMON];
    const realTwo = [LEMON, APPLE, LEMON, LEMON, CHERRY, APPLE, BANANA, LEMON];
    const reelThree = [LEMON, APPLE, LEMON, APPLE, CHERRY, LEMON, BANANA, LEMON];

    //Random spin
    const reelOneSpin = reelOne[Math.floor(Math.random()*reelOne.length)];
    const reelTwoSpin = realTwo[Math.floor(Math.random()*realTwo.length)];
    const reelThreeSpin = reelThree[Math.floor(Math.random()*reelThree.length)];

    const resultSpin = [reelOneSpin, reelTwoSpin, reelThreeSpin];

    //Calculate the reward
    const moneyWon = calculateReward(resultSpin);
    
    //Add the reward to the current user wallet amount
    //-1 to deduct the cost for the spin
    const balance = walletBalance + moneyWon - 1;

    //Update the user wallet
    setUserWallet(req.userId, balance);

    return {
        "result": resultSpin,
        "won": moneyWon,
        "balance": balance
    };
}

const calculateReward = function(resultSpin)  {
    //3 in a row
    if (resultSpin[0] === resultSpin[1] && resultSpin[0] === resultSpin[2]) {
        switch(resultSpin[0]) {
            case CHERRY: return 50;
            case APPLE: return 20;
            case BANANA: return 15;
            case LEMON: return 3;
        }
    }
   //2 in a row
    for (let i=0; i < resultSpin.length - 1; i++) {
        if (resultSpin[i+1] === resultSpin[i]) {
            switch(resultSpin[i]) {
                case CHERRY: return 40;
                case APPLE: return 10;
                case BANANA: return 5;
            }
        }
    }
    return 0;
}


async function getUserWallet(userId) {
    const connectionString = process.env.DATABASE_URL;  
    const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true});
    const db = client.db('react-test');
    const users = db.collection('users');
    const user = await users.findOne({email: userId});

    return user ? user.wallet : 0;
};

async function setUserWallet(userId, walletAmount) {
    const connectionString = process.env.DATABASE_URL;  
    const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true});
    const db = client.db('react-test');
    const users = db.collection('users');
    const user = await users.updateOne({email: userId}, {$set: {wallet : walletAmount}});
};

module.exports = {
    spin
};