import { BsFillTrashFill } from 'react-icons/bs';
import ButtonWrapper from './ButtonWrapper';
import { todoSchema } from '../interfaces/interface';
import { useContext } from 'react';
import { ConText } from '../context/AppContext';
const TodoItem = ({ date, time, completed, title, id }: todoSchema) => {
  const { deletetodo, updatetodo } = useContext(ConText)
  const postTime=`${new Date(time)}+${new Date(time)}`
  return (
    <div className='flex items-center gap-4 p-4 bg-[#94ADD7] bg-opacity-40 rounded-xl my-3'>
      <div className='outline-none' onClick={() => {
        updatetodo(id)
      }}>
        <input type="checkbox" className='checkboxstyle' checked={completed} onChange={()=>{}}/>
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

export default TodoItem
