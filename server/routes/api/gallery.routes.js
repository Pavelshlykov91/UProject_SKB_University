const router = require('express').Router();
const { Gallery, Foto } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const albums = await Gallery.findAll();
    console.log(albums);
    res.json(albums);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
// { include: { model: Foto } }
router.post('/', async (req, res) => {
  try {
    const { title, content, url } = req.body;
    const album = await Gallery.create({
      title,
      content,
      url,
      user_id: req.session.userId,
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

router.put('/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const { title, content, url } = req.body;
    const [result] = await Gallery.update(
      {
        title,
        content,
        url,
        user_id: req.session.userId,
      },
      { where: { id: albumId, user_id: req.session.userId } }
    );
    if (result > 0) {
      const album = await Gallery.findOne({
        where: { id: +albumId },
      });
      res.json(album);
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
