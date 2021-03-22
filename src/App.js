import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
  return (
    <div className='container'>
    <Header title='Task tracker'/>
    <Tasks tasks={ tasks }/>
    </div>
  );

}

export default App;
