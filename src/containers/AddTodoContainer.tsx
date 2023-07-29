import { useState } from "react"
import AddTodo from "../components/AddTodo"
import SelectCategory from "../components/SelectCategory"
import OpenTodo from "../components/OpenTodo"
const AddTodoContainer = () => {
  const [openAddTask,setopenAddTask]=useState(false);
  const toggleaddTask=()=>{
    setopenAddTask(!openAddTask)
  }
  return (
    <div>
      <div className='flex justify-between p-4'>
        <OpenTodo toggle={toggleaddTask} open={openAddTask}/>
        <SelectCategory/>
      </div>
      {openAddTask && <AddTodo/>}
    </div>
  )
}

export default AddTodoContainer
