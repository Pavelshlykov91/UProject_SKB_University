const router = require('express').Router();
const { Interview, InterviewComment, User } = require('../../db/models');
// const interviewcomment = require('../../db/models/interviewcomment');

router.get('/', async (req, res) => {
  const interviews = await Interview.findAll();
  // const comments = await interviewcomment.findAll()
  res.json(interviews);
});

router.post('/', async (req, res) => {
  try {
    const { title, url, content } = req.body;
    const interview = await Interview.create({
      user_id: 1,
      title,
      url,
      content,
    });
    res.json(interview);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:interviewId', async (req, res) => {
  const { interviewId } = req.params;
  const comments = await InterviewComment.findAll({where: {interview_id: interviewId}, include: { model: User}});
  // console.log(999999, comments);
  // const interview = await Interview.findOne({ where: { id: interviewId } });
  res.json(comments);
});

router.post('/:interviewId', async (req, res) => {
  const { interviewId } = req.params;
  const {content, interview_id, User} = req.body
  const user_id = User.id
  const comment = await InterviewComment.create({
    user_id,
    interview_id,
    content,
  });  
  res.json(comment);
});



module.exports = router;
