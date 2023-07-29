import { Props } from "../interfaces/interface"
const ButtonWrapper: React.FC<Props> = ({children}) => {
  return (
         <button className='bg-gray-300 p-3 rounded-md'> {children}</button>
  )
}

export default ButtonWrapper
