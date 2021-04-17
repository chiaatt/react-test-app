/*
    Handles the routes to the Sessions controller
*/
const express = require('express');
const router = express.Router({ mergeParams: true });

const sessionsController = require('../controllers/sessions.controller');

router.route('/')
    .post(sessionsController.login);

module.exports = router;