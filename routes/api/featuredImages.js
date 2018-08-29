const express = require('express');
const router = express.Router();

// @route GET api/featuredImages/test
// @desc Tests featuredImages route
// @access public
router.get('/test', (req, res) => res.json({msg: "featured images test"}));

module.exports = router;
