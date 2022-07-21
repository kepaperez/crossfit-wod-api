const Workout = require("../database/Workout") 
const{v4:uuid}=require("uuid");
const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkout();
    return allWorkouts;
  };
  
  const getOneWorkout = (workoutId) => {
    const getOneWorkout = Workout.getOneWorkout(workoutId);
    return getOneWorkout;
  };
  
  const createNewWorkout = (newWorkout) => {
    const workoutToInsert={
      ...newWorkout,
      id: uuid(),
      createAt: new Date().toLocaleString("en-US", {timeZone:"UTC"}),
      updateAt: new Date().toLocaleString("en-US", {timeZone:"UTC"}),

    }
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  };
  
  const updateOneWorkout = () => {
    return;
  };
  
  const deleteOneWorkout = () => {
    return;
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };