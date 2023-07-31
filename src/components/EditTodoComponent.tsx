import { BsArrowDownRightCircleFill } from "react-icons/bs"
import ButtonWrapper from "./ButtonWrapper"
interface Props{
         handleUpdate:()=> void;
         setCurrenttitle:(i:string)=> void;
         currentTitle:string
}
const EditTodoComponent = ({handleUpdate,setCurrenttitle,currentTitle}:Props) => {
  return (
         <div className='flex justify-between w-full items-center'>
         <div>
           <input type="text" value={currentTitle} onChange={(e) => {
             setCurrenttitle(e.target.value)
           }} className='bg-white bg-opacity-40 p-2 outline-none text-black ' />
         </div>
         <div>
           <ButtonWrapper>
             <BsArrowDownRightCircleFill onClick={() => {
             handleUpdate()
             }}/>
           </ButtonWrapper>
         </div>
       </div>
  )
}

export default EditTodoComponent
