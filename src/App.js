import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks,setTasks] = useState(
    [{id:1,
    text: 'Study',
    day: 'Mar 17',
    reminder: true,
    },
    {id:2,
        text: 'LOL',
        day: 'Mar 18',
        reminder: true,
    },
    {id:3,
        text: 'Sleep',
        day: 'Mar 19',
        reminder: false,
        }]
        )

//Add Task

const addTask=(task) =>{
  const id=Math.floor(Math.random() * 1000) + 1
  console.log(id)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
//Delete task
const DeleteTask=(id) =>{
    setTasks(tasks.filter((task) => task.id !== id))

  }
//Toggle reminder
const togglereminder=(id) =>{
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder } : task)
  )
}

  return (
    <div className='container'>
      
    <Header title='Task tracker'/>
    <AddTask onAdd= {addTask} />
    {tasks.length > 0 ?<Tasks tasks={ tasks } onDelete={DeleteTask} onToggle={togglereminder} />: 'No tasks to show'}
    </div>
  );

}

export default App;
