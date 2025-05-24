import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContexts";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  console.log(signInUser);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // create/send user in the firebase

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const signInInfo={
            email,
            lastSignInTime: result.user?.metadata?.lastSignInTime
        }
        // update last signin to the database
        fetch('http://localhost:3000/users',{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(signInInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card max-w-sm mx-auto shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignIn now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter Your Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
