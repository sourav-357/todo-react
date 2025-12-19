import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    // Properties
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ], 
    // Functionalities declaration
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {}, // id is required to know which todo is going to be updated
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}