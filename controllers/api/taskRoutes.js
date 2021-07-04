const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

 router.post('/', withAuth, async (req, res) => {
     console.log("cats")

//      try {
  
//       const newList = await List.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newList);
//     } catch (err) {
//       res.status(400).json(err);
//     }
  });







module.exports = router;