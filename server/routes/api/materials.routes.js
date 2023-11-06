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
			user_id: req.session.userId,
			comment_id: 1,
			type: '1',
			file: '1',
		})
		res.json(material)
	} catch ({ message }) {
		res.json(message)
	}
})

router.delete('/:materialId', async (req, res) => {
	try {
		const { materialId } = req.params
		const result = await Material.destroy({ where: { id: materialId } })
		if (result > 0) {
			res.json({ message: 'success', id: +materialId })
			return
		}
	} catch ({ message }) {
		res.json({ message })
	}
})

router.put('/:materialId', async (req, res) => {
	try {
		const { materialId } = req.params
		const { name, author, content, url } = req.body
		const [result] = await Material.update({
			name,
			author,
			content,
			url,
			user_id: req.session.userId,
		}, { where: { id: materialId, user_id: req.session.userId }})
		console.log(result);
		if(result > 0){
			const material = await Material.findOne({
				where: {id: +materialId}
			})
			res.json(material)
			return
		}
	} catch ({ message }) {
		res.json({ message })
	}
})

module.exports = router
