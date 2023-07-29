import { useContext } from "react"
import Todo from "../components/Todo"
import { ConText } from "../context/AppContext"
import { todo } from "../interfaces/interface"

const TodoContainer = () => {
  const {todos}=useContext(ConText)
  return (
       <div>
           {todos?.map((todo:todo,index:number)=> (
            <Todo key={index} title={todo.title} date={todo.date} time={todo.time} completed={todo.completed} id={todo.id}/>
           ))}
       </div>
  )
}

export default TodoContainer
