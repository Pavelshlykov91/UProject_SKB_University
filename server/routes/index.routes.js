const router = require('express').Router();
const MainPageRouter = require('./api/mainpage.routes')
const InterviewPage = require('./api/interview.routes')
// const testApiRouter = require('./api/test.routes');
const albumsApiRouter = require('./api/albums.routes');

// router.use('/api/test', testApiRouter);
router.use('api/gallery', albumsApiRouter);

router.use('/api/main', MainPageRouter);
router.use('/api/interview', InterviewPage);
module.exports = router;
