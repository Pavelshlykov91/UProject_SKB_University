const router = require('express').Router()
const {ForumAnswer,User}=require('../../db/models')

router.get('/', async (req,res) => {
try {
  // const commentId = req.params.commentId
  const comments = await ForumAnswer.findAll()
  res.json(comments)
 } catch ({message}) {
    res.json({message})
  
  }
})







module.exports = router
