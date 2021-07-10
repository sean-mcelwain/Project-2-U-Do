const router = require('express').Router();
const { List } = require('../../models');
const withAuth = require('../../utils/auth');
const sendText = require('../../apistuff/sms2.js')

router.post('/', withAuth, async (req, res) => {
  try {

    const newList = await List.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newList);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/api', withAuth, async (req, res) => {
  try {

 console.log("callapi");
 sendText(req.body)

    res.status(200).json({});
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const listData = await List.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!listData) {
      res.status(404).json({ message: 'No to-do list found with this id!' });
      return;
    }

    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updates book based on its book_id
router.put('/:id', async (req, res) => {

  const updateList = await List.update(
    {
      name: req.body.name,
      description: req.body.description
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedList) => {
      res.json(updatedList);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;