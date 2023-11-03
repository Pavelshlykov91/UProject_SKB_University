const router = require('express').Router();
const MainPageRouter = require('./api/mainpage.routes')
const InterviewPage = require('./api/interview.routes')
// const testApiRouter = require('./api/test.routes');

// router.use('/api/test', testApiRouter);

router.use('/api/MainPage', MainPageRouter);
router.use('/api/InterviewPage', InterviewPage);
module.exports = router;
