interface Props{
  submit: ()=>void;
}

const AddTaskButton = ({submit}:Props) => {
  return (
    <button className="bg-heading p-2 rounded-xl text-white" onClick={() => {submit()
    }}>Add Task</button>
  )
}

export default AddTaskButton