const router = require('express').Router();
const { Gallery } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const albums = await Gallery.findAll();
    res.json(albums);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
