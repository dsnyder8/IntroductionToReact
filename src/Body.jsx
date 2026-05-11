import React, { useState } from 'react';



function Body(){
    //need to specify the htmlFor attribute instead of for because for is a reserved word in javascript, so we have to use htmlFor instead  
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    function handleAddTask(e){
        //prevents default form submission behavior, which would cause the page to reload 
        e.preventDefault();
        if(task.trim() ==" "){
            alert("Please enter a task");
            return;
        }
        const newTask = {
            id: Date.now(),
            name: taskName,
            text: taskDescription,
            priority: taskPriority,
            completed: false,
        };
       setTask('');
       setDescription('');
       setPriority('1');
    }


    return(
        <>
        <label htmlFor = "task"> Task Name:</label>
        <input type="text" placeholder = "Enter a Task"/>
        <label htmlFor = "description"> Task Description:</label>
        <input type="text" placeholder = "Describe your task"/> 
        <label htmlFor = "priority"> Task Priority:</label>
        <select name="priority" id="priority">
            <option value ="1">1 - Lowest Priority</option>
            <option value ="2">2 </option>
            <option value ="3">3</option>
            <option value ="4">4</option>
            <option value ="5">5 - Highest Priority</option>

        </select>
       
        <button type="submit" onClick = {handleAddTask}>Add Task</button>

        <div className="task-boxes">
            <div className="current-task-box">
                <h2><u>Current Tasks</u></h2>
                <div className="task-options">
                    <button> Completed</button>
                    <button> Edit</button>
                    <button> Delete</button>
                </div>
            </div>
            <div className="completed-task-box">
                <h2><u>Completed Tasks</u></h2>
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