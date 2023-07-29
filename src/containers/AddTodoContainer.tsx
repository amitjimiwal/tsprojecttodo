import AddTask from "../components/AddTask"
import SelectCategory from "../components/SelectCategory"
const AddTodoContainer = () => {
  return (
       <div className='flex justify-between p-4'>
         <AddTask/>
         <SelectCategory/>
       </div>
  )
}

export default AddTodoContainer
