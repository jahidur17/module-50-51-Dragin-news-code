import React, { use, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';


const SocialLogin = () => {
  const {
    googleLogin,
    githubLogin,
  } = use(AuthContext);

  const [activeLogin, setActiveLogin] = useState(null); 
  const handleGoogleLogin = () =>{
    setActiveLogin("Google")
    googleLogin()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error.message);
    })
  }

  const handleGithubLogin = () =>{
    setActiveLogin("Github")
     githubLogin()
       .then((result) => {
         console.log(result.user);
       })
       .catch((error) => {
         console.log(error.message);
       });
  }
    return (
      <div>
        <h2 className="font-bold mb-5">login with</h2>

        <div className="space-y-3">
          {(!activeLogin || activeLogin === "google") && (
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-secondary w-full "
            >
              <FcGoogle size={24}></FcGoogle> Login with Google
            </button>
          )}
          {(!activeLogin || activeLogin === "github") && (
            <button
              onClick={handleGithubLogin}
              className="btn btn-outline btn-primary w-full"
            >
              <FaGithub size={24}></FaGithub> Login with GitHub
            </button>
          )}
        </div>
      </div>
    );
};

export default SocialLogin;