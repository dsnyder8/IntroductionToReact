import { React, useState } from "react";

function Body() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("1");
  const [tasks, setTasks] = useState([]);

  function handleAddEvent(event) {
    event.preventDefault();
    if (taskName === "" || taskName.trim() === "") {
      alert("Please add a name for your task");
      return;
    }

    if (taskDescription === "" || taskDescription.trim() === "") {
      alert("Please add a short description for your task");
      return;
    }
    // finish functionality
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setTaskDescription("");
    setTaskPriority("1");
  }
  function handleDelete(id) {
    const updatedTasks = tasks.filter((tasksToStay) => tasksToStay.id !== id);
    setTasks(updatedTasks);
  }

  function handleEditTask(task) {}

  function handleTaskCompletion(task) {
    const completedTasks = tasks.map((completedTask) => {
      if (completedTask.id === id) {
        return { ...singleTask, completed: !singleTask.completed };
      }

      return singleTask;
    });

    setTasks(updatedTasks);
  }
  return (
    //need to specify the htmlFor attribute instead of for because for is a reserved word in javascript, so we have to use htmlFor instead
    <>
      <label htmlFor="task"> Task Name:</label>
      <input
        type="text"
        placeholder="Enter a Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <label htmlFor="description"> Task Description:</label>
      <input
        type="text"
        placeholder="Describe your task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />

      <label htmlFor="priority"> Task Priority:</label>
      <select
        name="priority"
        id="priority"
        value={taskPriority}
        onChange={(e) => setTaskPriority(e.target.value)}
      >
        <option value="1">1 - Lowest Priority</option>
        <option value="2">2 </option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 - Highest Priority</option>
      </select>

      <button type="submit" onClick={handleAddEvent}>
        Add Task
      </button>

      <hr />

      <div className="task-boxes">
        <div className="current-task-box">
          <h2>
            <u>Current Tasks</u>
          </h2>
          <div className="task-options">
            {tasks.map((singleTask) => (
              <div key={singleTask.id} className="task-options">
                <strong>{singleTask.name}</strong> - {singleTask.description}{" "}
                (Priority: {singleTask.priority})
              </div>
            ))}

            <button> Completed</button>
            <button> Edit</button>
            <button onClick={() => handleDelete(singleTask.id)}> Delete</button>
          </div>
        </div>

        <div className="completed-task-box">
          <h2>
            <u>Completed Tasks</u>
          </h2>
          <div className="task-options">
            <button> Edit</button>
            <button> Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
