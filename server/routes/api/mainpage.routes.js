const router = require('express').Router();

router.get('/', async (req, res) => {
  let int1 = {name: 'LALA', img: 'https://м.ноу-хау.рф/resources/01/650/0/9d/08/0d2d956d-c642-4526-9e02-9e866c58bfbf.jpg', description: 'Lorem ipsum lalala cool int'}
  let int2 = {name: 'LALALA', img: 'https://static.nix.ru/images/samsung-gt-s5230-954542254.jpg?good_id=95454&width=500&height=500&view_id=2254', description: 'Lorem ipsum lalala cool int lalala'}
  let int3 = {name: 'LALAooo', img: 'https://static.nix.ru/images/samsung-gt-s5230-897992254.jpg?good_id=89799&width=500&height=500&view_id=2254', description: 'Lorem ipsum ipsum lorem cool int lalala!!!!!!!!'}
  let int4 = {name: 'LALAsss', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXPoE5gwtASVAQfXmWfvzADyGzhHS3_WYbFRJYq8vQSRVbkq3k2I7ts9iSFtxiwfpyIQ&usqp=CAU', description: 'Lorem ipsum ipsum lorem cool int lalalalllll'}
  let int5 = {name: 'LALALA!!!', img: 'https://shop.by/images/samsung_gt_s5230_7.webp', description: 'Lorem ipsum ipsum lorem cool int lalala uraaaaaaa'}
  const interviews = [int1, int2, int3, int4, int5]
  console.log(2222222, interviews);
  res.json(interviews);
});

module.exports = router;
