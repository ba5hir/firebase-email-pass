import { config } from "localforage";
import React from "react";

const handleEmailChange = (event) => {
  // console.log(event.target.value);
};
const handlePassBlur = (event) => {
  // console.log(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const pass = event.target.password.value;
  console.log(email, pass);
};

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Please Enter Your Email"
        />
        <br />
        <input
          onBlur={handlePassBlur}
          type="password"
          name="Password"
          id="password"
          placeholder="Please Enter Your Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
