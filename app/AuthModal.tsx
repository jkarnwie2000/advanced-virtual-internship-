"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthModalProps = {
  onClose: () => void;
  redirectTo?: string;
};

export default function AuthModal({ onClose, redirectTo }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <button onClick={onClose} className="btn-close">X</button>

      {isLogin ? (
          <LoginForm redirectTo={redirectTo} />
        ) : (
          <RegisterForm />
      )}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
}
