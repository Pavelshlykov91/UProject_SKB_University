const router = require('express').Router();
const { Event } = require('../../db/models');


router.get('/', async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

router.post('/', async (req, res) => {
  try {
    const { data, name, theme, address, time } = req.body;
    const event = await Event.create({
      data, name, theme, address, time, course_id: 1
    });
    res.json(event);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:EventId', async (req, res) => {
  try {
    const { EventId } = req.params;
    const result = await Event.destroy({ where: { id: EventId } });
    if (result > 0) {
      res.json({ id: +EventId });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});


module.exports = router;
