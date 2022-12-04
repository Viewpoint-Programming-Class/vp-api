const express = require('express');
const router = express.Router();


router.use('/companies', require('./companies'));
router.use('/games', require('./games'));


module.exports = router;