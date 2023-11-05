const router = require('express').Router()
const { Material } = require('../../db/models')

router.get('/', async (req, res) => {
	const materials = await Material.findAll()
	res.json(materials)
})

router.post('/', async (req, res) => {
	try {
		const { name, author, content, url } = req.body
		const material = await Material.create({
			name,
			author,
			content,
			url,
			user_id: 1,
			comment_id: 1,
			type: '1',
			file:'1',
		})
    res.json(material)
	} catch ({ message }) {
    res.json(message)
  }
})

module.exports = router
