import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState("");
    const {signIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const handleLogin = (e) =>{
         e.preventDefault();
         const form = e.target;
        //  console.log(form);
         const email = form.email.value;
         const password = form.password.value;
        //  console.log({email, password});

         signIn(email, password)
           .then((userCredential) => {
             // Signed in
             const user = userCredential.user;
            //  console.log(user)
             navigate(`${location.state?  location.state : "/"}`)

           })
           .catch((error) => {
             const errorCode = error.code;
            //  const errorMessage = error.message;
            //  alert(errorMessage, errorCode)
            setError(errorCode);
           });
    }
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text-2xl text-center">
            Login your account
          </h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email address</label>
                <input
                  type="email"
                  name='email'
                  className="input"
                  placeholder="Enter your email address"
                  required
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name='password'
                  className="input"
                  placeholder="Enter your password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {
                  error && <p className='text-red-400'>{error}</p>
                }
                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                <p className="flex justify-center py-4 font-semibold">
                  Don’t Have An Account ?{" "}
                  <Link className="text-secondary" to="/auth/register">
                    Register
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;