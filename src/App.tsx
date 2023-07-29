import './App.css'
import Header from './components/Header'
import AddTodoContainer from './containers/AddTodoContainer'
import TodoContainer from './containers/TodoContainer'
import AppContext from './context/AppContext'

function App() {
  return (
    <div className='mx-auto max-w-2xl p-4 bg-background h-screen'>
<AppContext>
<Header/>
      <AddTodoContainer/>
      <TodoContainer/>
</AppContext>
    </div>
  )
}

export default App
