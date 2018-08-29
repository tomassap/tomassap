const express = require('express');
const router = express.Router();

// @route GET api/appointments/test
// @desc Tests appointments route
// @access Private
router.get('/test', (req, res) => res.json({msg: "appointments test"}));

module.exports = router;
