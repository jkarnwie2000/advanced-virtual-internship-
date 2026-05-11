"use client";

import { useState } from "react"
import LoginForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal() {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="auth-container">
            {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <RegisterForm setIsLogin={setIsLogin} />}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>

        </div>
    )
}