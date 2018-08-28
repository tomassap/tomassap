const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({msg: "featured images test"}));

module.exports = router;
