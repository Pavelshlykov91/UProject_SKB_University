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

router.post('/', async (req, res) => {
  try {
    const { title, content, url } = req.body;
    const album = await Gallery.create({
      title,
      content,
      url,
      user_id: 1,
      foto_id: 1,
    });

    res.json(album);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const result = await Gallery.destroy({ where: { id: albumId } });
    if (result > 0) {
      res.json({ message: 'success', id: +albumId });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
