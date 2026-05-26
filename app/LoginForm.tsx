"use client";

import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginIcon from "./components/LoginIcon";
import GoogleIcon from "./components/GoogleIcon";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in user:", result.user);
      // Optional: redirect or update app state here
    } catch (error: any) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="login-form-container">
      <h3>Login to Summarist</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <button className="btn-login login-guest">
          <span className="guest-icon">
            <LoginIcon />
          </span>
          Login as Guest
        </button>

        <div className="form-divider--wrapper">
          <div className="form-divider" />
          <p>or</p>
          <div className="form-divider" />
        </div>

        <button className="btn-login login-google">
          <span className="google-icon">
            <GoogleIcon />
          </span>
          Login with Google
        </button>

        <div className="form-divider--wrapper">
          <div className="form-divider" />
          <p>or</p>
          <div className="form-divider" />
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-login"
          placeholder="Email Address"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-login"
          placeholder="Password"
        />

        <button type="submit" className="btn-login btn-login--primary">
          Login
        </button>
      </form>
      <div className="form__btns">
        <button>Forgot your password?</button>
        <button className="sign-up">Don&apos;t have an account?</button>
      </div>
    </div>
  );
}
