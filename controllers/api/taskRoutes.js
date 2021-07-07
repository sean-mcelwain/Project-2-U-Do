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

  router.put('/togcom/:taskId', withAuth, async (req, res) => {
    console.log(req.params.taskId)
    const taskId = req.params.taskId 
const task = await Task.findByPk(taskId)
const completedStatus = task.completed
          const taskcomptog = await Task.update({
            completed: !completedStatus
          },
          {
              where: {
                  id: taskId
              }
        }).then((updatedTask) => {
            res.status(200).json(updatedTask);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          }); 
    
      });
      router.put('/progcom/:taskId', withAuth, async (req, res) => {
        console.log(req.params.taskId)
        const taskId = req.params.taskId 
    const task = await Task.findByPk(taskId)
    const progressStatus = task.in_progress
              const taskcomptog = await Task.update({
                in_progress: !progressStatus
              },
              {
                  where: {
                      id: taskId
                  }
            }).then((updatedTask) => {
                res.status(200).json(updatedTask);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
              }); 
        
          });






module.exports = router;