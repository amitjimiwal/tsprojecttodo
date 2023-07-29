interface Props{
  toggle:()=> void,
  open:boolean
}
const OpenTodo = ({toggle,open}:Props) => {
  return (
    <button className="bg-heading p-2 rounded-xl text-white" onClick={() => {
      toggle()
    }}>{open ? 'Close' : 'Add Task'}</button>
  )
}

export default OpenTodo
