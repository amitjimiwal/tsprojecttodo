import './App.css'
import Header from './components/Header'
import AddTodoContainer from './UI containers/AddTodoContainer'
import TodoContainer from './UI containers/TodoContainer'
import AppContext from './context/AppContext'

function App() {
  return (
    <div className='mx-auto max-w-2xl p-4 bg-background min-h-screen'>
<AppContext>
<Header/>
      <AddTodoContainer/>
      <TodoContainer/>
</AppContext>
    </div>
  )
}

export default App
