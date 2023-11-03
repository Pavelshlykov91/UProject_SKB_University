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

// router.get('/add-form', async (req, res) => {
//   try {
//     res.json({ message: 'success' });
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// });

module.exports = router;
