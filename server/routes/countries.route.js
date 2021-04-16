/*
    Handles the routes to the Country controller
*/
const express = require('express');
const router = express.Router({ mergeParams: true });

const countriesController = require('../controllers/countries.controller');

//For Task 1
router.route('/:countryName')
    .get(countriesController.getCountry);

module.exports = router;