import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Please Enter Your Email"
        />
        <br />
        <input
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
