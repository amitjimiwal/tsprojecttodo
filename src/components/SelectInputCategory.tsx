import { Dispatch, SetStateAction } from "react";

interface Props{
  setcatagory: Dispatch<SetStateAction<string>>;
}

const SelectInputCategory = ({setcatagory}:Props) => {
  return (
    <div>
      <select className="rounded-xl p-2" onChange={(e)=>{
         setcatagory(e.target.value)
      }}>
      <option value="incompleted">Incompleted</option>
      <option value="completed">Completed</option>
    </select>
    </div>
  )
}

export default SelectInputCategory
