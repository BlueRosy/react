import React, { useEffect, useState } from 'react'
import { useTodo, useGenderContext } from '../contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faFeather} from '@fortawesome/free-solid-svg-icons'



function Todolist() {

   const {todos, addTodo, updateTodo, deleteTodo, toggleComplete, toggleEditable} = useTodo();

   const {gender} = useGenderContext();

   const editIcon = (todo) => {
    return (todo.editable ? <FontAwesomeIcon icon={faFeather} /> : <FontAwesomeIcon icon={faLock} />)
    
   }



   function addTodolist(event) {
        event.preventDefault();
        const todo = document.getElementById("todo");
        const todoinfo = todo.value;
        if (todoinfo)
            {
                addTodo(todoinfo);
                // console.log(todos);
            }
        
        todo.value = "";
   }


   // another triky: must run every re-render, rather than () => {}, if so, must use useEffect to tigger it to happen
   const completecss = (todo) => {
        return todo.completed ?  "line-through": "";
   }

   const completeListcss = (todo) => {
        return (todo.completed ? 
        "border-green-200 bg-green-50":
        "border-orange-200 bg-orange-50"
        );
   }


   // a triky: there are many some class lists, so must match the correct one by indexing 
   function editTodoList(id, todo) {
    // or could combine the attribute readOnly = {!todo.editable}; and onChange={(e) => editTodo(td.id, e.target.value)}
        if (todo.editable)
            {
                console.log("yes")
                const newTodo = document.querySelectorAll('.todocontent');
                updateTodo(id, newTodo[id].value);
            }
   }


   function getList(){
    const lists = todos.map((td, index) => (
        <li className={'flex justify-between items-center m-2 p-2 border-2 border-dashed rounded-lg ' + (completeListcss(td))
        }  key={index}>
            <div className='flex items-center gap-2'>
                <input name='listitem' type="checkbox" 
                value={td.todo} 
                onChange={(event) => {toggleComplete(index, event.target.checked);
                    // console.log(event.target.checked);
                    // console.log(todos);
                }}
                />
                <input className={'todocontent bg-transparent ' + (completecss(td))} value={td.todo} type='text' onChange={() => editTodoList(index,td)} />
            </div>
            <div className='flex gap-2'>
                <button className='p-1 rounded-lg' onClick={() => toggleEditable(index)}>{editIcon(td)}</button>
                <button className='p-1 rounded-lg' onClick={() => deleteTodo(index)}>❌</button>
            </div>
        </li>
    ))

    // console.log(todos);
    return lists;
   }

   function getImage() {
    return (gender ? <img src="/src/assets/bg8.png" alt="girl" className='border-0 p-0 m-0 fixed bottom-10 right-3 -z-10 w-1/3 transition-all'/> :
    <img src="/src/assets/bg9.png" alt="boy" className='fixed bottom-10 left-3 -z-10 w-1/3 border-0 p-0 m-0 transition-all'/>)
    }

    return (
        <div className='w-80 mx-auto pt-20 h-screen'>
            <h1 className='font-bold text-3xl mb-10 text-center'>Manage Your Todos</h1>
            <form className='text-center pb-4'>
                <input id="todo" className='w-3/5 p-2 border-2 border-solid border-orange-300 rounded-l-lg' type="text" autoFocus
                placeholder='Write Your Todos'/>
                <button className='bg-orange-200 py-2 px-4 border-y-2 border-orange-200 rounded-r-lg' onClick={addTodolist}>Add</button>
            </form>
            <ul >{getList()}</ul>
            {getImage()}
        </div>
        
    )
}

export default Todolist