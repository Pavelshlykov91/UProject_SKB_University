const router = require('express').Router()
const {Material} = require('../../db/models')

router.get('/', async (req,res)=> {
  const materials = await Material.findAll()
  res.json(materials)
})
module.exports = router;
