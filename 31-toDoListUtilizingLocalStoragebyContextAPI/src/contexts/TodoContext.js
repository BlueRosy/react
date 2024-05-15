import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            todo: "Todo message",
            completed:false,
            editable: false,
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id, status) => {},
    toggleEditable: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
