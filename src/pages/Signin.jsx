import React, { useState } from 'react';
import { data, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit= () => {
    console.log(name,password,email);
    const data ={name,password,email}
    
  localStorage.setItem('user',JSON.stringify(data))

    navigate('/dashboard'); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={submit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;