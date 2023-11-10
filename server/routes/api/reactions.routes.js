const router = require('express').Router();
const {Emoji, InterviewEmoji} = require('../../db/models')

router.get('/', async (req, res) => {
  const reactions = await InterviewEmoji.findAll({ include: { model: Emoji } });
  res.json(reactions);
});

// router.put('/:reactionId', async (req, res) => {
//   const { id, Emoji, count, interview_id } = req.body
//   const [result] = await Interview.update({
//     count, Emoji
//   }, {where : {id: id}});

//   if(result > 0){
//     const reaction = await Reaction.findOne({
//       where: {id: id}
//     })
//     res.json(reaction)
// }});

module.exports = router;
