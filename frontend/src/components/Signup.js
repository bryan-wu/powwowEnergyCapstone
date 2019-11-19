import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Signup.css";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword, confirmPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Signup">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
		<FormGroup controlId="password" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => confirmPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Signup
        </Button>
      </form>
    </div>
  );
}


{/*
/*import React from 'react';

 
const Login = () => {
    return (

       <div>
          <h1>LOG IN PAGE</h1>
          <p>LOG IN page body content</p>
       </div>
    );
}
 
export default Login;




import React from 'react';
 
const Signup = () => {
    return (
       <div>
          <h1>Sign Up</h1>
          <p>Sign Up page body content</p>
       </div>
    );
}
 
export default Signup;*/}
