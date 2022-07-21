const workoutService = require("../services/workoutsService")


const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send(allWorkouts);
  };
  
  const getOneWorkout = (req, res) => {
    const {
      params: { workoutId },
    } = req;
    if (!workoutId) {
      return;
    }
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: "OK", data: workout });
  };
  
  const createNewWorkout = (req, res) => {
    const { body } = req;
    if (
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercises ||
      !body.trainerTips
    ) {
      return;
    }

    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
    };
    
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  };
  
  const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send("Update an existing workout id: "+req.params.workoutId);
  };
  
  const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send("Delete an existing workout id: "+req.params.workoutId);
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };