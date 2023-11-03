const router = require('express').Router();
const { Gallery } = require('../../db/models');

router.get('/', async (req, res) => {
  const albums = await Gallery.findAll();
  res.json(albums);
  console.log(albums);
});

module.exports = router;
