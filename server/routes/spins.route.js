/*
    Handles the routes to the slots controller
*/
const express = require('express');
const router = express.Router({ mergeParams: true });
const verifyToken = require('../helpers/verifyToken');

const spinsController = require('../controllers/spins.controller');

router.route('/')
    .get(verifyToken, spinsController.spin);

module.exports = router;