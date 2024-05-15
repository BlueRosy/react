import React, { useEffect, useState } from 'react'
import {TodoProvider, GenderContextProvider} from './contexts/index'
import Todolist from './Components/Todolist';
import ModeControl from './Components/ModeControl';

function App() {

  // set todos
  const [todos, setTodos] = useState([]);
  // set genderMode
  const [gender, setGender] = useState(true);

  // update bg mode based on gender
  useEffect(()=> {

    document.body.classList.remove("boy", "girl");
    gender ? document.body.classList.add("girl") : document.body.classList.add("boy");
    
  }, [gender])


  // local storage in the web page loaded. so when the page reloaded or refresh at the beginning. will save the data 
  useEffect(() => {
    // JSON.parse => convert the string to object !! yes. if any list items existed in the last session, then: just parse it into json and add it into the todos.
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  // whenever todos updated, run this function to save the todos into the local storage. but localStorage only accept the string format, so need to stringify the object
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // id can be setted by Date.now()
  const addTodo = (todo) => {
    /* add a todo list content just fine */
    const newTodo = {
      todo: todo,
      completed:false,
      editable: false,
    };
    
    setTodos(tds => [...tds, newTodo]);
  }

  // another way: updateTodo = (id, todo) => {setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === id ? todo : prevTodo))}, here: define the todo to be the object
  const updateTodo = (id, todo) => {
    if (id >= 0 && id < todos.length)
      {
        const updatedTodo = todos[id];
        updatedTodo.todo = todo;
        setTodos([...todos.slice(0, id), updatedTodo, ...todos.slice(id + 1)]);
      }
    
  }

  const deleteTodo = (id) => {
    setTodos(tds => tds.filter((_, index) => index !== id));
  }

  // another way: toggleComplete = (id) => setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodos ))
  const toggleComplete = (id, status) => {
    if (id >= 0 && id < todos.length){
      const updatedTodo = todos[id];
      updatedTodo.completed = status;
      setTodos([...todos.slice(0, id), updatedTodo, ...todos.slice(id + 1)]);
    }
  }

  const toggleEditable = (id) => {
    if (id >= 0 && id < todos.length){
      const updatedTodo = todos[id];
      updatedTodo.editable = !updatedTodo.editable;
      setTodos([...todos.slice(0, id), updatedTodo, ...todos.slice(id + 1)]);

    }
    console.log(todos);
  }

  const modeConvertion = () => {
    setGender(!gender);
  }

  return (
    <>
      <GenderContextProvider value={{gender, modeConvertion}}>
        <ModeControl />

      <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete, toggleEditable}}>
        <Todolist />
      </TodoProvider>
      </GenderContextProvider>
    </>
    
  )
}

export default App