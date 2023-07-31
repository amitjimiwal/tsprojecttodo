interface Props{
  submit: ()=>void;
  toggle:()=> void
}

const AddTaskButton = ({submit,toggle}:Props) => {
  return (
    <button className="bg-heading p-2 rounded-xl text-white" onClick={() => {submit()
      toggle()
    }}>Add Task</button>
  )
}

export default AddTaskButton