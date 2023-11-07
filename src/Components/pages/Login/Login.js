import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
     
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handlelogin = event=> {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email,password)
        .then(result => {
            const user = result.user;
            const loggedUser = {
                email: user.email
            }
            console.log(loggedUser);
        //    backend e hitting kora hoicce 

            fetch('http://localhost:5000/jwt', {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loggedUser)
            }
            )
            .then(res=> res.json())
            .then(data => {
                console.log('token data', data);

                // store access token into local storage 
                localStorage.setItem('access-token', data.token);
            })


            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your are login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/');
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
           
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handlelogin} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn btn-primary"type="submit" value="Login" />
                        </div>
                        <Link to='/signup' className='my-4 mx-auto'>New Here? <span className='text-orange-400'>Sign Up</span></Link>
                    </form>
                </div>
            </div>
       
    );
};

export default Login;