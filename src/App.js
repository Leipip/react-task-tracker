import './App.css';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import AddTask from './components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([]) 

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    .then(setTasks(tasks.filter((task) => task.id !== id)))
  }

  const toggle = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
    console.log(id);
  }

  const addTask = async (task) => {
    const requestOptions = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
  })
  
    const data = await requestOptions.json()


    //const id = Math.floor(Math.random()*10000+1)
   // const newTask = {id, ...data}
    setTasks([...tasks, data])
    //console.log(newTask)
    


    

  }
   
  return (
    <div className='container'>
      <Header onShow={() => setShowAddTask(!showAddTask)}/>
      {tasks.length <= 0 ? "There are no task" : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggle}></Tasks>}
      {(showAddTask === true) ? <AddTask onAdd={addTask} ></AddTask> : ""}
    </div>
  );
}

export default App;
