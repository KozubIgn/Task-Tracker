import React from 'react';
import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'Doctor appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    }, {
        id: 2,
        text: 'Meeting at Restaurant',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    }, {
        id: 3,
        text: 'Do a shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },])
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? {
                    ...task, reminder:
                        !task.reminder
                } : task
            ))
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    };
    return (
        <div className='container'>
            <Header/>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
        </div>

    );
}

export default App;
