const router = require("express").Router();
const {
  User,
  Exercise,
  User_group,
  Group,
  Course,
  ExerciseMaterial,
} = require("../../db/models");

router.get("/students", async (req, res) => {
  try {
    const users = await User.findAll({
      where: { role: "студент" },
      include: [{ model: Course }],
    });
    res.json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/exercise", async (req, res) => {
  try {
    const exercises = await Exercise.findAll({
      include: [{ model: User }, { model: Course }],
    });
    res.json(exercises);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/group", async (req, res) => {
  try {
    const groups = await User_group.findAll({
      include: [{ model: Group }, { model: Exercise }, { model: User }],
    });
    res.json(groups);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/exercisematerial/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const exercisematerials = await ExerciseMaterial.findAll({
      where: { exercise_id: id },
    });
    res.json(exercisematerials);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
