const router = require('express').Router();
const { Gallery, Foto } = require('../../db/models');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const albums = await Gallery.findAll({ include: { model: Foto } });
    res.json(albums);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', upload.single('url'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const newFileUrl = `/img/${req.file.originalname}`;

    const album = await Gallery.create({
      title,
      content,
      url: newFileUrl,
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
      res.json({ id: +albumId });
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

router.post('/:albumId/photo', async (req, res) => {
  try {
    const { albumId } = req.params;
    const { url } = req.body;
    const photo = await Foto.create({
      url,
      user_id: req.session.userId,
      gallery_id: +albumId,
    });

    res.json(photo);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:albumId/photo/:photoId', async (req, res) => {
  try {
    const { albumId, photoId } = req.params;
    const result = await Foto.destroy({
      where: { id: +photoId, gallery_id: +albumId },
    });
    if (result > 0) {
      const photo = { id: +photoId, gallery_id: +albumId };
      res.json(photo);
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
