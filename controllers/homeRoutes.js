const router = require('express').Router();
const { List, User, Task } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const listData = await List.findAll({
      where: {
        user_id: req.session.user_id
      },
      include:[Task]

        });
    const lists = listData.map((list) => list.get({ plain: true }));
    console.log(lists)
    res.render('homepage', {
      lists,
      // users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/list/:id', async (req, res) => {
  try {
    const listData = await List.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        Task
      ],
    });
    const list = listData.get({ plain: true });
    console.log(list)
    res.render('list', {
      ...list,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addList', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: List }],
    });
    const user = userData.get({ plain: true });
    res.render('addList', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
