const express = require('express');
const countries = require('./countries.route');
const users = require('./users.route');
const sessions = require('./sessions.route');
const spins = require('./spins.route');

const router = express.Router();

router.use('/countries', countries);
// registration
router.use('/users', users);
// login
router.use('/session', sessions);
// spin
router.use('/spins', spins);

router.get('/', (req, res) => res.send('Sample Node API Version1'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;