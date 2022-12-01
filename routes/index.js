const express = require('express');
const router = express.Router();


router.use('/companies', require('./companies'))



module.exports = router