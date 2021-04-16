/*
    Handles the routes to the Country controller
*/
const express = require('express');
const router = express.Router({ mergeParams: true });

const countriesController = require('../controllers/countries.controller');

//For Task 1
router.route('/:countryName')
    .get(countriesController.getCountry);

//For Task 2&3
router.route('/')
    .get(countriesController.getCountries);

module.exports = router;