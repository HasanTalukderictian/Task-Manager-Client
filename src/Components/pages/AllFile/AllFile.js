import React, { useContext, useState } from 'react';
import View from '../View/View';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AllFile = () => {
    
    const [tasks, setTasks] = useState([]);
    const {user} = useContext(AuthContext);

    const handleAddUser = event => {
        event.preventDefault();


        const form = event.target;
        const title = form.title.value;
        const task = form.task.value
        const email = user?.email;

        const data = { title:title, task:task, email };
        console.log(data);


        fetch(`http://localhost:5000/task`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Task Added Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTasks([...tasks, data]);
                }
            })
    }

    return (
        <div className='mx-10'>
            <div className='my-8 mx-10'>
                <h2 className='text-4xl text-center font-semibold'>Task Management System </h2>
                  {user ? <>  <h3 className='text-center text-3xl font-semibold my-4' >Welcome Man </h3>
                  <p className='text-center text-xl'>Please Refresh page after a task every time </p>
                    <form onSubmit={handleAddUser}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Task Title</span>

                        </label>
                        <input type="text" name='title' placeholder="Tiltle" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Task </span>

                        </label>
                        <input type="text" name='task' placeholder="Your Task" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs my-4">
                        <input className='btn btn-warning' type="submit" value="Add" />

                    </div>
                </form>
                     </> : <> <h2 className='text-center text-3xl font-semibold my-4'> Please Login First</h2> 
                       </>}
                
            </div>
            <section>
                <div>
                    <h2 className='text-4xl text-center'>Your Tasks</h2>
                    <div className='my-10 mx-5 p-4'>
                        <View></View>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllFile;