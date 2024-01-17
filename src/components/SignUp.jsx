import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
  const {signUp} = useContext(AuthContext)
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password =  form.password.value;
        console.log(email,password);
        signUp(email,password)
        .then(result => {
          console.log(result.user);
        })
       .catch(error => {
        console.error(error);
       })
    }
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
            <form onSubmit={handleFormSubmit} className="card-body">
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
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default SignUp;
