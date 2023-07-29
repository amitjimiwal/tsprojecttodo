import { useState ,useContext} from "react"
import AddTask from "./AddTask"
import ButtonWrapper from "./ButtonWrapper"
import Cancel from "./Cancel"
import { todo } from "../interfaces/interface"
import SelectInputCategory from "./SelectInputCategory"
import { ConText } from "../context/AppContext"
import { v4 as uuid } from 'uuid';
const AddTodo = () => {
   const { addTodo} = useContext(ConText)
   const [category, setcategory] = useState<string>('')
   const [title, settitle] = useState<string>('');
   const submit = () => {
     const unique_id = uuid();
     const small_id = unique_id.slice(0, 8)
     const todo: todo = {
       id: small_id,
       title,
       status: category,
       completed: category === 'completed' ? true : false,
       date: `${new Date().getDate()}/${new Date().getMonth()}/${+new Date().getMonth()}`,
       time: `${new Date().getTime()}`,
     }
     addTodo(todo);
     settitle('')
     setcategory('')
   }
   return (
      <div className="bg-[#94ADD7] p-4 rounded-xl z-50 w-full h-auto  mb-4">
         <div className=" flex flex-col gap-4">
            <div className="font-bold text-primary">
               Add Todo
            </div>
            <div className="flex flex-col gap-3 text-secondary">
               <label htmlFor="title">Title</label>
               <input type="text" placeholder='Enter todo' className="p-2 outline-none" id="title" name="title" onChange={(e) => {
                  settitle(e.target.value)
               }} value={title}/>
            </div>
            <div className="flex justify-between text-secondary">
               <h3>Status</h3>
               <SelectInputCategory setcatagory={setcategory} />
            </div>
            <div className="flex gap-4">
               <AddTask submit={submit}/>
               <ButtonWrapper>
                  <Cancel />
               </ButtonWrapper>
            </div>
         </div>
      </div>
   )
}

export default AddTodo
