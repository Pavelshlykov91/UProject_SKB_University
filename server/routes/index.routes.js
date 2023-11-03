const router = require('express').Router();

// const testApiRouter = require('./api/test.routes');
const albumsApiRouter = require('./api/albums.routes');

// router.use('/api/test', testApiRouter);
router.use('api/gellery', albumsApiRouter);

module.exports = router;
