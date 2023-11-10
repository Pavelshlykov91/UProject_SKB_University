const router = require('express').Router()
const { Forum } = require('../../db/models')

router.get('/', async (req, res) => {
	const forums = await Forum.findAll()
	res.json(forums)
})

router.post('/', async (req, res) => {
	try {
		const { title, content, img } = req.body
		const forum = await Forum.create({
			user_id: req.session.userId,
			title,
			content,
			img,
		})
		res.json(forum)
	} catch ({ message }) {
		res.json(message)
	}
})

router.delete('/:forumId', async (req, res) => {
	try {
		const { forumId } = req.params
		const result = await Forum.destroy({ where: { id: forumId } })
		if (result > 0) {
			res.json({ message: 'success', id: +forumId })
			return
		}
	} catch ({ message }) {
		res.json({ message })
	}
})

router.put('/:forumId', async (req, res) => {
	try {
		const { forumId } = req.params
		const { title, content} = req.body
		const [result] = await Forum.update(
			{
				title,
				content,
				user_id: req.session.userId,
			},
			{ where: { id: forumId, user_id: req.session.userId } }
		)
		console.log(result)
		if (result > 0) {
			const forum = await Forum.findOne({
				where: { id: +forumId },
			})
			res.json(forum)
			return
		}
	} catch ({ message }) {
		res.json({ message })
	}
})

module.exports = router
