interface Props {
         children: React.ReactNode;
}
const ButtonWrapper: React.FC<Props> = ({children}) => {
  return (
         <button className='bg-gray-300 p-3 rounded-md'> {children}</button>
  )
}

export default ButtonWrapper
