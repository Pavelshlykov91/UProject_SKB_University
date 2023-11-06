const router = require('express').Router();

// const testApiRouter = require('./api/test.routes');
const MainPageRouter = require('./api/mainpage.routes');
const materialPageRouter = require('./api/materials.routes');
const themePageRouter = require('./api/themes.routes')
const InterviewPage = require('./api/interviews.routes');
const albumsApiRouter = require('./api/gallery.routes');
const authApiRouter = require('./api/auth.routes')
const usersApiRouter = require('./api/administration.routes')


// router.use('/api/test', testApiRouter);
router.use('/api/main', MainPageRouter);
router.use('/api/materials', materialPageRouter);
router.use('/api/themes',themePageRouter );
router.use('/api/interviews', InterviewPage);
router.use('/api/gallery', albumsApiRouter);
router.use('/api/auth', authApiRouter)
router.use('/api/administration', usersApiRouter)

module.exports = router;
