const router = require('express').Router();
const { Interview } = require('../../db/models');

router.get('/', async (req, res) => {
  const interviews = await Interview.findAll();
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
  const interviews = await Interview.findAll();
  const { interviewId } = req.params;
  // const interview = await Interview.findOne({ where: { id: interviewId } });
  res.json(interviews);
});



module.exports = router;
