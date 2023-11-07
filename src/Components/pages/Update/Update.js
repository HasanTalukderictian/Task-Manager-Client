import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
   
    const loggedUser = useLoaderData();
    console.log(loggedUser);
    const navigate = useNavigate();

    const handleUpdate =event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const task = form.task.value;
        const data = {title, task};
        console.log(data);

        fetch(`http://localhost:5000/task/${loggedUser._id}`, {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)

           

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Task Update Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/');
            }
        })
    }


    return (
        <div className='my-8 mx-10'>
        <h2 className='text-4xl text-center font-semibold'>Task Management System </h2>
        <form onSubmit={handleUpdate} >
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Task Title</span>

                </label>
                <input type="text" name='title' placeholder="Tiltle" defaultValue={loggedUser?.title} className="input input-bordered w-full max-w-xs" />

            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Task </span>

                </label>
                <input type="text" name='task' defaultValue={loggedUser?.task} placeholder="Your Task" className="input input-bordered w-full max-w-xs" />

            </div>
            <div className="form-control w-full max-w-xs my-4">
                <input className='btn btn-warning' type="submit" value="Update" />

            </div>
        </form>
    </div>
    );
};

export default Update;