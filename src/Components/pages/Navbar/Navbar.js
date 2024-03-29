
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';




const NavBar = () => {

    const {user,logOut } = useContext(AuthContext);
    
   
   const handleLogout = () => {
     logOut()
     .then( () => {
        // store access token into local storage 
         localStorage.removeItem('access-token');
     })
     .catch(error => console.log(error))
   }
   
     
    const navOptions = <>
        <li className="btn btn-warning mr-4"><Link to='/' >Home</Link></li>

   
        {user?  <> <button onClick={handleLogout} className="btn btn-secondary">LogOut</button>  </>
         : 
        <>  <li className="btn btn-warning"><Link to='/login'>Login</Link></li> </> }
        


    
    

        </>
        

    return (
        <div className="navbar bg-base-100 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                   
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navOptions}
                </ul>
            </div>
            
        </div>
    );
};

export default NavBar;