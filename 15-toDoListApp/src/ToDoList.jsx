import React, {useState} from 'react'

function ToDoList(){

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    
    function handleAddTask(event) {

        // when somebody enter sth
        if (task.trim() !== "") {
            // update the Task list to add a new Task with an updater function
            setTaskList(tl => [...tl, task.trim()]);


            // reset the task var to "" empty string
            setTask("");
        }
        
    }

    function handleRemoveTask(index){
        setTaskList(tl => tl.filter((_, i) => i !== index));
    }

    function MoveTaskUp(index) {
        if (index > 0){
            const newTaskList = [...taskList];
            [newTaskList[index-1],newTaskList[index]] = [newTaskList[index],newTaskList[index-1]];
            setTaskList(newTaskList);
        }
    }

    function MoveTaskDown(index) {
        if (index < taskList.length - 1){
            const newTaskList = [...taskList];
            [newTaskList[index],newTaskList[index + 1]] = [newTaskList[index + 1],newTaskList[index]];
            setTaskList(newTaskList);
        }
    }

    function handleTaskChange(event){
        // update the task value to reflect the user input
        setTask(event.target.value);
    }

    const itemList = taskList.map((t, index) => 
    <li key={index}>
        <p>{t}</p> 
        <div className='buttonBox'>
            <button className='red' onClick={() => handleRemoveTask(index)}>Delete</button>
            <button className='blue' onClick={() => MoveTaskUp(index)}>👆</button>
            <button className='blue' onClick={() => MoveTaskDown(index)}>👇</button>
        </div>
    </li>)

    
    return (
    <div className="toDoList-Container">
        
        <h1>To-Do-List</h1>
        <div className='addTaskForm'>
            <input type="text" value={task} placeholder="Enter a task..." autoFocus onChange={handleTaskChange} />
            <button onClick={handleAddTask}>Add</button>
        </div>
        <ul className='displayTaskList'>
            {itemList}
        </ul>
    </div>
    );
}

export default ToDoList