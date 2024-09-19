import React from 'react';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back!</h1>
        <p>Login in to access your account</p>
        
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <div className="footer">
          <p>Don't have an account? <a href="/register">Register now.</a></p>
          <p><a href="/forgot-password">Forgot your password?</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
