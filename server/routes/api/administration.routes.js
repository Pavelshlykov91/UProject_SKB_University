const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/students", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
