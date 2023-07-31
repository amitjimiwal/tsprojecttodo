import { useState } from "react"
import TodoInputBox from "../components/TodoInputBox"
import SelectCategory from "../components/SelectCategory"
import OpenTaskInputButton from "../components/OpenTaskInputButton"
const AddTodoContainer = () => {
  const [openAddTask,setopenAddTask]=useState(false);
  const toggleaddTask=()=>{
    setopenAddTask(!openAddTask)
  }
  return (
    <div>
      <div className='flex justify-between p-4'>
        <OpenTaskInputButton toggle={toggleaddTask} open={openAddTask}/>
        <SelectCategory/>
      </div>
      {openAddTask && <TodoInputBox toggle={toggleaddTask}/>}
    </div>
  )
}

export default AddTodoContainer
