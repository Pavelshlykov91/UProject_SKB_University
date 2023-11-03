const router = require('express').Router()
const {Materials} = require('../../db/models')

router.get('/', async (req,res)=> {
  const materials = await Materials.findAll()
  res.json(materials)
})