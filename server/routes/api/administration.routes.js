const router = require('express').Router();
const {
  User,
  Exercise,
  User_group,
  Group,
  Course,
  ExerciseMaterial,
  Answer,
  Mark,
} = require('../../db/models');

router.get('/students', async (req, res) => {
  try {
    const users = await User.findAll({
      where: { role: 'студент' },
      include: [{ model: Course }],
    });
    res.json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/exercise', async (req, res) => {
  try {
    const exercises = await Exercise.findAll({
      include: [
        { model: User },
        { model: Course },
        { model: ExerciseMaterial },
        {model: Answer}
      ],
    });
    console.log(exercises);
    res.json(exercises);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/group', async (req, res) => {
  try {
    const groups = await User_group.findAll({
      include: [
        { model: Group },
        {
          model: Exercise,
          include: [{ model: Answer, include: [{ model: Mark }] }],
        },
        { model: User },
      ],
    });
    res.json(groups);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/exercisematerial/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const exercisematerials = await ExerciseMaterial.findAll({
      where: { exercise_id: id },
    });
    // console.log(exercisematerials, "--------------");
    res.json(exercisematerials);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// router.post('/api/administration/exercise', async (req, res) => {
//   try {
//     const { user_id, answer, exerciseId } = req.body;
//     const answer1 = await Answer.create({
//       user_id, answer, exerciseId, done_status: true, file: 'la', deprecated: false
//     });
//     res.json(answer1);
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });

module.exports = router;
