import { React, useState } from "react";
import "./index.css";
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
      timeCompleted: null,
    };
    //this is where id add the sorting logic??
    setTasks([...tasks, newTask]);

    setTaskName("");
    setTaskDescription("");
    setTaskPriority("1");
  }
  function handleDelete(id) {
    const updatedTasks = tasks.filter((tasksToStay) => tasksToStay.id !== id);
    setTasks(updatedTasks);
  }

  function handleTaskCompletion(id) {
    const completedTasks = tasks.map((singleTask) => {
      if (singleTask.id === id) {
        return {
          ...singleTask,
          completed: !singleTask.completed,
          timeCompleted: Date.now(),
        };
      }

      return singleTask;
    });

    setTasks(completedTasks);
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

      <div className="task-boxes">
        <div className="current-task-box">
          <h2>
            <u>Current Tasks</u>
          </h2>
          <div className="task-list">
            <div className="task-header">
              <div>Task</div>
              <div>Description</div>
              <div>Priority</div>
              <div></div>
            </div>
            {tasks
              .filter((singleTask) => singleTask.completed === false)
              .sort((a, b) => b.priority - a.priority)
              .map((singleTask) => (
                <div key={singleTask.id} className="task-item">
                  {/* Column 1: Name */}
                  <div className="task-name">
                    <strong>{singleTask.name}</strong>
                  </div>

                  {/* Column 2: Description */}
                  <div className="task-desc">{singleTask.description}</div>

                  {/* Column 3: Priority */}
                  <div className="task-pri">{singleTask.priority}</div>

                  {/* Column 4: The Buttons */}
                  <div className="task-actions">
                    <button onClick={() => handleTaskCompletion(singleTask.id)}>
                      Completed
                    </button>
                    <button onClick={() => handleDelete(singleTask.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="completed-task-box">
          <h2>
            <u>Completed Tasks</u>
          </h2>
          <div className="task-list">
            <div className="task-header">
              <div>Task</div>
              <div>Description</div>
              <div>Priority</div>
              <div></div>
            </div>
            {tasks
              .filter((singleTask) => singleTask.completed === true)
              .sort((a, b) => b.timeCompleted - a.timeCompleted)
              .map((singleTask) => (
                <div key={singleTask.id} className="task-item">
                  <div className="task-name">
                    <strong>{singleTask.name}</strong>
                  </div>
                  <div className="task-desc">{singleTask.description}</div>
                  <div className="task-pri">
                    Priority: {singleTask.priority}
                  </div>

                  <div className="task-actions">
                    <button onClick={() => handleTaskCompletion(singleTask.id)}>
                      Undo
                    </button>
                    <button onClick={() => handleDelete(singleTask.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
