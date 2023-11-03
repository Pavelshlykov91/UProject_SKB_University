const router = require('express').Router();
const {Interview} = require('./../../db/models')

router.get('/', async (req, res) => {
  const interviews = await Interview.findAll();
  res.json(interviews);
});

module.exports = router;