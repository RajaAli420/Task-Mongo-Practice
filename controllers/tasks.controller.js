const asyncWrapper = require("../middleware/async.wrapper.middleware");
const Task = require("../models/tasks");
const { createCustomError } = require("../errors/custom.errors");
const getAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Task.find();
  res.status(200).json(allTasks);
});
const createTask = asyncWrapper(async (req, res) => {
  console.log(req.body);
  const task = await Task.create(req.body);
  res.status(200).json(task);
});
const getTask = asyncWrapper(async (req, res, next) => {
  console.log(req.params.id);
  const oneTasledTask = await Task.findOne({ _id: req.params.id });
  if (!oneTasledTask) {
    return next(
      createCustomError(`No task found with id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json(oneTasledTask);
});
const updateTask = asyncWrapper(async (req, res) => {
  const updateTask = await Task.updateOne(
    { _id: req.params.id },
    { name: req.body.name }
  );
  res.status(200).json(updateTask);
});
const deleteTask = asyncWrapper(async (req, res) => {
  const deleteTask = await Task.deleteOne({ _id: req.params.id });
  res.status(200).json(deleteTask);
});
module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask };
