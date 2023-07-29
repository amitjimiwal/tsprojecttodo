import React, { createContext, useEffect, useState } from "react"
import { Props, todo, Contextinterface } from "../interfaces/interface";
const initialTodos: todo[] = [];
export const ConText = createContext<Contextinterface>({
  todos: initialTodos,
  fetchtodo: () => { },
  addTodo: () => { },
  deletetodo: () => { },
  settype: () => { },
  updatetodo: () => { },
});
const AppContext: React.FC<Props> = ({ children }) => {
  const [todos, settodos] = useState<todo[]>([]);
  const [type, settype] = useState("all");

  function fetchtodo(type: string) {
    const storedTodos = localStorage.getItem('todos');
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    console.log("fetch me ", items)
    if (type === 'all') {
      settodos(items);
      return items;
    }
    const filteredtodo = items.filter((item: todo) => item.status === type)
    settodos(filteredtodo);
  }

  function addTodo(todo: todo) {
    const storedTodos = localStorage.getItem('todos');
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    items.push(todo);
    localStorage.setItem('todos', JSON.stringify(items))
    settodos(items)
  }

  function deletetodo(id: string) {
    const storedTodos = localStorage.getItem('todos');
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    const filteredtodo = items.filter((item: todo) => item.id !== id)
    localStorage.setItem('todos', JSON.stringify(filteredtodo))
    settodos(filteredtodo);
  }
  
  function updatetodo(id: string) {
    const storedTodos = localStorage.getItem('todos');
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    const filteredtodo = items.reduce((acc: todo[], curr: todo) => {
      if (curr.id === id) {
        curr.completed ?
          acc.push({ ...curr, completed: false, status: "incompleted" }) :
          acc.push({ ...curr, completed: true, status: "completed" })
        return acc
      }
      else {
        acc.push(curr)
        return acc;
      }
    }, [])
    localStorage.setItem('todos', JSON.stringify(filteredtodo))
    settodos(filteredtodo);
  }
  useEffect(() => {
    fetchtodo(type)
  }, [type])
  return (
    <ConText.Provider value={{ todos, fetchtodo, addTodo, deletetodo, settype, updatetodo }}>
      {children}
    </ConText.Provider>
  )
}

export default AppContext
