import { createSlice, nanoid } from "@reduxjs/toolkit";

// what store have initially
const initialState = {
    todos: [{id:1, text: "Hello World"}]
}

// function sayHello() {
//     console.log("sayHello guys");
    
// }
// slice is a bigger version of reducer and reducer is just a functionality
export const todoSlice = createSlice({
    // below name will show in redux toolkit chrome extension
    name : 'todo',
    initialState,
    reducers: {
        // addTodo: sayHello,  note-giving reference of sayHello not calling
        addTodo: (state, action) =>{
            const todo = {
                id:nanoid(), //giving nanoid for unique id
                 text: action.payload //payload is a object own if we need some specific data then action.payload.text so it will take only text
            }
            state.todos.push(todo) //pushing todo in todos
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) =>todo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer //giving reducers list to store.js file