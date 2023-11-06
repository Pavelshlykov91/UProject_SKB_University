const router = require('express').Router()

const {ThemeLibrary} = require('../../db/models')

router.get('/',async (req,res) => {
  const themes = await ThemeLibrary.findAll()
  res.json(themes)
})


module.exports = router