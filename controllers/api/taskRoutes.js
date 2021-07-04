const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

 router.post('/', withAuth, async (req, res) => {
const taskDesc = req.body.task
const listId = req.body.listId

     try {
      const newTask = await Task.create({
description: taskDesc,
        list_id: listId
      });
      res.status(200).json(newTask);
    } catch (err) {
      res.status(400).json(err);
    }
  });







module.exports = router;