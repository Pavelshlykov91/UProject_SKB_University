const router = require('express').Router();
const MainPageRouter = require('./api/mainpage.routes');
const albumsApiRouter = require('./api/albums.routes');
// const testApiRouter = require('./api/test.routes');

router.use('/api/MainPage', MainPageRouter);
router.use('/api/gallery', albumsApiRouter);

// router.use('/api/test', testApiRouter);

module.exports = router;
