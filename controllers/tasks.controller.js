const Task = require("../models/tasks");
const getAllTasks = async (req, res) => {
  const allTasks = await Task.find();
  res.status(200).json(allTasks);
};
const createTask = async (req, res) => {
  console.log(req.body);
  const task = await Task.create(req.body);
  res.status(200).json(task);
};
const getTask = async (req, res) => {
  console.log(req.params.id);
  const oneTasledTask = await Task.findOne({ _id: req.params.id });
  res.status(200).json(oneTasledTask);
};
const updateTask = async (req, res) => {
  const updateTask = await Task.updateOne(
    { _id: req.params.id },
    { name: req.body.name }
  );
  res.status(200).json(updateTask);
};
const deleteTask = async (req, res) => {
  const deleteTask = await Task.deleteOne({ _id: req.params.id });
  res.status(200).json(deleteTask);
};
module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask };
