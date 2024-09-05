import { useContext } from "react";
import Navbar from "./Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {

    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    
    const handleLogin = e => {
        e.preventDefault();
        //const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //Sign In process
        logIn(email,password)
        .then(result => {
            console.log(result.user);
            alert('Successfully LoggedIn');

            //navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>If you are new user?please visit<NavLink className='text-blue-600 font-medium' to='/register'>Register</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;