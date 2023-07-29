import './App.css'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import AddTodoContainer from './containers/AddTodoContainer'
import TodoContainer from './containers/TodoContainer'

function App() {
  return (
    <div className='mx-auto max-w-2xl p-4 bg-background h-screen'>
      <Header/>
      <AddTodoContainer/>
        {/* <AddTodo/> */}
      <TodoContainer/>
    </div>
  )
}

export default App
