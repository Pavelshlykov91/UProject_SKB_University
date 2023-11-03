const router = require('express').Router();
const MainPageRouter = require('./api/mainpage.routes')
// const testApiRouter = require('./api/test.routes');

// router.use('/api/test', testApiRouter);

router.use('/api/MainPage', MainPageRouter);

module.exports = router;
