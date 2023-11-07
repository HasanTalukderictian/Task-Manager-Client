import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ViewCart = ({ taskItem, updateTasks }) => {

    const { _id, title, task } = taskItem;
    

    const handleDeleteTask =_id => {
          
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/task/${_id}`, {
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount> 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          updateTasks(_id);
                    }
                   
                })
            }
          })

        console.log(_id);
        



    
    }
    


    return (
        <div className='my-4 mx-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{task}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/updateUser/${_id}`}> <button className="btn btn-success">Update</button></Link>
                        <button onClick={()=>handleDeleteTask(_id)} className="btn bg-[#ff3811]">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCart;