const router = require('express').Router();

// const testApiRouter = require('./api/test.routes');
const MainPageRouter = require('./api/mainpage.routes');
const materialPageRouter = require('./api/materials.routes');
const InterviewPage = require('./api/interviews.routes');
const albumsApiRouter = require('./api/gallery.routes');
const authApiRouter = require('./api/auth.routes');
const usersApiRouter = require('./api/administration.routes');
const ReactionsRouter = require('./api/reactions.routes');
const forumsRouter = require('./api/forums.routes');
const commentsRouter = require('./api/comments.routes');
const EventsRouter = require('./api/events.routes')
const DeployRouter = require('./api/deploy.routes');


// router.use('/api/test', testApiRouter);
router.use('/api/main', MainPageRouter);
router.use('/api/materials', materialPageRouter);
router.use('/api/interviews', InterviewPage);
router.use('/api/gallery', albumsApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/administration', usersApiRouter);
router.use('/api/reactions', ReactionsRouter);
router.use('/api/forums', forumsRouter);
router.use('/api/comments', commentsRouter);
router.use('/api/events', EventsRouter);
router.use('*', DeployRouter);


module.exports = router;
