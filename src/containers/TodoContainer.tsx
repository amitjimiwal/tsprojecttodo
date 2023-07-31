import { useContext } from "react"
import { ConText } from "../context/AppContext"
import { todoSchema} from "../interfaces/interface"
import TodoItem from "../components/TodoItem"

const TodoContainer = () => {
  const {todos}=useContext(ConText)
  return (
       <div>
           {todos?.map((todo:todoSchema,index:number)=> (
            <TodoItem key={index} title={todo.title} date={todo.date} time={todo.time} completed={todo.completed} id={todo.id}/>
           ))}
       </div>
  )
}

export default TodoContainer
