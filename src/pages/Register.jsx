import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext);
    const handleRegister = (e) =>{
       e.preventDefault();
       console.log(e.target);
       const form = e.target;
       const name = form.name.value;
       const photo =form.photo.value;
       const email =form.email.value;
       const password = form.password.value;
       console.log({ name, photo, email, password });
       createUser(email, password)
         .then((result) => {
           const user = result.user;
        //    console.log(user);
        setUser(user);
         })
         .catch((error) => {
        //    const errorCode = error.code;
           const errorMessage = error.message;
           alert(errorMessage);
         });
    }
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text-2xl text-center">
            Register your account
          </h1>
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter your name"
                  required
                />
                {/* photo url */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Enter your password"
                  required
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter your email address"
                  required
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Enter your password"
                  required
                />
                <div>
                  <a className="link link-hover">Accept Term & Conditions</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <p className="flex justify-center py-4 font-semibold">
                  All ready Have An Account ?{" "}
                  <Link className="text-secondary" to="/auth/login">
                    Login
                  </Link>
                </p>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;