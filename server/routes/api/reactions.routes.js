const router = require('express').Router();
const {Emoji, InterviewEmoji} = require('../../db/models')

router.get('/', async (req, res) => {
  const reactions = await InterviewEmoji.findAll({ include: { model: Emoji } });
  res.json(reactions);
});

// router.get('/:interviewId', async (req, res) => {
//   try {
//     const  interviewId  = req.params.interviewId;
//     const reactions = await InterviewComment.findAll({where: {interview_id: interviewId}, include: { model: User}});
//     // console.log(999999, comments);
//     // const interview = await Interview.findOne({ where: { id: interviewId } });
//     res.json(comments);
//   } catch ({message}) {
//     res.json({message})
//   }
  
// });

module.exports = router;
