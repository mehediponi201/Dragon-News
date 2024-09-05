import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegistration = e =>{
        e.preventDefault();
        //const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        //create user process
        createUser(email,password)
        .then(result => {
            console.log(result.user);
            alert('Registration successfully done..!!!');
        })
        .catch(error => {
            console.log(error.message); 
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name"className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your password" name="photo"className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email"className="input input-bordered" required />
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
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>  
                        <p>If you are registered user?please visit <NavLink className='text-blue-600 font-medium' to='/login'>Login</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;