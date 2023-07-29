import AddTask from "./AddTask"
import ButtonWrapper from "./ButtonWrapper"
import Cancel from "./Cancel"
import SelectCategory from "./SelectCategory"

const AddTodo = () => {
  return (
    <div>
         <div>

         </div>
         <div className="bg-[#94ADD7] p-4 bg-opacity-40 rounded-xl flex flex-col gap-4">
      <div className="font-bold text-primary">
         Add Todo
      </div>
      <div className="flex flex-col gap-3 text-secondary">
         <label htmlFor="title">Title</label>
         <input type="text" placeholder='Enter todo' className="p-2 outline-none" id="title"/>
      </div>
      <div className="flex justify-between text-secondary">
         <h3>Status</h3>
         <SelectCategory/>
      </div>    
      <div className="flex gap-4">
         <AddTask/>
         <ButtonWrapper>
                  <Cancel />
         </ButtonWrapper>
      </div> 
    </div>
</div>
  )
}

export default AddTodo
