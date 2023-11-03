const router = require('express').Router();

// const testApiRouter = require('./api/test.routes');
const MainPageRouter = require('./api/mainpage.routes');
const materialPageRouter = require('./api/materials.routes');
const InterviewPage = require('./api/interview.routes');
const albumsApiRouter = require('./api/gallery.routes');

// router.use('/api/test', testApiRouter);
router.use('/api/main', MainPageRouter);
router.use('/api/materials', materialPageRouter);
router.use('/api/interview', InterviewPage);
router.use('/api/gallery', albumsApiRouter);

module.exports = router;
