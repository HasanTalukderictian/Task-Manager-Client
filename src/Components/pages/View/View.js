import React, { useContext, useEffect, useState } from 'react';
import ViewCart from './ViewCart';
import { AuthContext } from '../../Providers/AuthProvider';

const View = () => {
    
    const {user} = useContext(AuthContext);
    const [tasks, setTasks] = useState([])
     
   
    const url =`http://localhost:5000/task?email=${user?.email}`
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access-token'));
    
      
    useEffect(() => {
        if (user && user.email && accessToken) {
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            });
        }
    }, [user, accessToken, url]);

      const updateTasks = (taskId) => {
        // Filter out the deleted task from the tasks array
        const updatedTasks = tasks.filter(taskItem => taskItem._id !== taskId);
        setTasks(updatedTasks);
    }

    const addTaskToUI = (newTask) => {
        setTasks([...tasks, newTask]);
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {tasks.map(taskItem=> <ViewCart
             key={taskItem._id}
             taskItem={taskItem}
             updateTasks={updateTasks}
             addTaskToUI={addTaskToUI}
             
        
              ></ViewCart>)}
        </div>
    );
};

export default View;