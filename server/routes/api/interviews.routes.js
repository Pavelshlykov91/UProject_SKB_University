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
    const { title, url, content, user_id  } = req.body;
    const interview = await Interview.create({
      user_id,
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
  try {
    const  interviewId  = req.params.interviewId;
    const comments = await InterviewComment.findAll({where: {interview_id: interviewId}, include: { model: User}});
    // console.log(999999, comments);
    // const interview = await Interview.findOne({ where: { id: interviewId } });
    res.json(comments);
  } catch ({message}) {
    res.json({message})
  }
  
});

router.post('/:interviewId', async (req, res) => {
  const  interviewId  = req.params.interviewId;
  const {content, interview_id} = req.body
  const user_id = req.session.userId
  const comment = await InterviewComment.create({
    user_id,
    interview_id,
    content
  });  
  const comment2 = await InterviewComment.findOne({where: {id: comment.id}, include: {model: User}})
  res.json(comment2);
});

router.put('/:interviewId', async (req, res) => {
  const  interviewId  = req.params.interviewId;
  const { title, url, content, user_id, id } = req.body
  const [result] = await Interview.update({
    title, url, content
  }, {where : {id: id}});

  if(result > 0){
    const interview = await Interview.findOne({
      where: {id: +interviewId}
    })
    res.json(interview)
}});

router.delete('/:InterviewId', async (req, res) => {
  try {
    const { InterviewId } = req.params;
    const result = await Interview.destroy({ where: { id: InterviewId } });
    if (result > 0) {
      res.json({ id: +InterviewId });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});



module.exports = router;
