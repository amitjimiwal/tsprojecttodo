import { render, screen } from "@testing-library/react";
// import React from "react";
import TodoContainer from "../src/UI containers/TodoContainer";
import { todoSchema } from "../src/interfaces/interface";
import { ConText } from "../src/context/AppContext";

describe(TodoContainer,()=>{
         it("it should display no todo if todo is empty",()=>{
               render(<TodoContainer/>)
               const button = screen.getByRole('button',{name:'No Todos'});
               expect(button).toBeInTheDocument();
         })
         it("it should display  todo if todo is not empty",()=>{
                  const todos: todoSchema[]=[
                           {
                               "id": "1e5041c6",
                               "title": "hh",
                               "status": "completed",
                               "completed": true,
                               "date": "31/07/2023",
                               "time": "17:56:00"
                           },
                           {
                               "id": "d4bc4b10",
                               "title": "okay okay",
                               "status": "completed",
                               "completed": true,
                               "date": "03/08/2023",
                               "time": "12:31:24"
                           }
                       ]
                       const fetchtodo=jest.fn();
                       const updatetodo=jest.fn();
                       const deletetodo=jest.fn();
                       const addTodo=jest.fn();
                       const settype=jest.fn();
                       render(<ConText.Provider value={{todos,fetchtodo,updatetodo,addTodo,deletetodo,settype}}>
                           <TodoContainer/>
                       </ConText.Provider>)
                       const todoitem=screen.getByText('okay okay')
                       const todoitem2=screen.getByText('hh')
                       expect(todoitem).toBeInTheDocument();
                       expect(todoitem2).toBeInTheDocument();
         })
})