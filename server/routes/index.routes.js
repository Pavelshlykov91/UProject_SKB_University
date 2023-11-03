const router = require('express').Router();
const MainPageRouter = require('./api/mainpage.routes')
const materialPageRouter = require('./api/materials.routes')
const InterviewPage = require('./api/interview.routes')
// const testApiRouter = require('./api/test.routes');
const albumsApiRouter = require('./api/albums.routes');

// router.use('/api/test', testApiRouter);
router.use('api/gellery', albumsApiRouter);
router.use('/api/materials',materialPageRouter)
router.use('/api/MainPage', MainPageRouter);
router.use('/api/InterviewPage', InterviewPage);
module.exports = router;
