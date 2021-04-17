/*
    Handles the routes to the Registration controller
*/
const express = require('express');
const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');

router.route('/')
    .post(usersController.register);

module.exports = router;