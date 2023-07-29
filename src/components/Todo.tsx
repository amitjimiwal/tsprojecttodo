import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs';
const Todo = () => {
  return (
    <div className='flex items-center gap-4 p-4 bg-[#94ADD7] bg-opacity-40 rounded-xl'>
      <div>
         <input type="checkbox" className='checkboxstyle'/>
      </div>
      <div>
         <h3 className='tracking-wide'><s>Title Goes Here</s></h3>
         <p className='text-gray-700'>5:23 AM , 01/06/2022</p>
      </div>
      <div className='ml-auto flex gap-3 text-xl'>
         <button className='bg-gray-300 p-3 rounded-md'><BsFillPencilFill/></button>
         <button className='bg-gray-300 p-3 rounded-md'><BsFillTrashFill/></button>
      </div>
    </div>
  )
}

export default Todo
