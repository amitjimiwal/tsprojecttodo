import { BsFillTrashFill } from 'react-icons/bs';
import ButtonWrapper from './ButtonWrapper';
import { todo } from '../interfaces/interface';
import { useContext } from 'react';
import { ConText } from '../context/AppContext';
const Todo = ({ key, date, time, completed, title, id }: todo) => {
  const { deletetodo, updatetodo } = useContext(ConText)
  return (
    <div className='flex items-center gap-4 p-4 bg-[#94ADD7] bg-opacity-40 rounded-xl my-3' key={key}>
      <div onClick={() => {
        updatetodo(id)
      }} className='outline-none'>
        {completed ? <input type="checkbox" className='checkboxstyle outline-none' checked /> : <input type="checkbox" className='checkboxstyle' />}
      </div>
      <div>
        <h3 className='tracking-wide'>{completed ? <s>{title}</s> : <>{title}</>} </h3>
        <p className='text-gray-700'>{date}, {time}</p>
      </div>
      <div className='ml-auto flex gap-3 text-xl'>
        <ButtonWrapper>
          <BsFillTrashFill onClick={() => {
            deletetodo(id)
          }} />
        </ButtonWrapper>
        {/* <ButtonWrapper>
                  <BsFillPencilFill onClick={()=>{
                    updatetodo(id)
                  }}/>
         </ButtonWrapper> */}
      </div>
    </div>
  )
}

export default Todo
