import './App.css'
import AddTask from './components/AddTask'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import SelectCategory from './components/SelectCategory'
import Todo from './components/Todo'
import TodoContainer from './containers/TodoContainer'

function App() {
  return (
    <div className='mx-auto max-w-2xl p-4 bg-background h-screen'>
      <Header/>
      <div className='flex justify-between p-4'>
        <AddTask/>
        <SelectCategory/>
      </div>
        {/* <AddTodo/> */}
      <TodoContainer/>
    </div>
  )
}

export default App
