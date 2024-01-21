import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextApi/authContext';

const Login = () => {
  const navigate = useNavigate();
  const { login, setAuth, setCartCount } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Enter all details');
      return;
    }

    try {
      const result = await fetch(`http://localhost:3080/api/user`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const response = await result.json();
      console.log(response)
      console.log(response.foundUser.isAdmin)
      if(response.foundUser.isAdmin===true){
         console.log("isAdmin")
      }
      // console.log(response.token)

      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userInfo', JSON.stringify(response.foundUser));
        // localStorage.setItem('orders', response.token);
        setCartCount(response.foundUser.orders.length);
        login(response);
        setAuth(true);
        navigate('/home');
        alert('Login successful');
      } else {
        alert(response.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="form-container">
      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Login</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
