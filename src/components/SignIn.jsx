import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const {signIn} = useContext(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email,password)
        .then((result) => {
            console.log(result.user);
            const user = {
                email,
                lastLoginAt : result.user.metadata?.lastSignInTime
            }
            fetch('http://localhost:5000/users',{
                method : "PATCH",
                headers : {
                    'content-type' : 'application/json' 
                },
                body: JSON.stringify(user)
            })
            
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                      title: "Successful!",
                      text: "User Sign In successfully",
                      icon: "success",
                      confirmButtonText: "Cool",
                    });
                  }
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }
  return (
    <div>
      
      <div className="hero min-h-screen bg-base-200">
     
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-center text-blue-600 font-bold mt-2">Sign In </h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
