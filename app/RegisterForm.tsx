"use client"; // Required for handling state like password matching

import { useState } from "react";
import ChildComponent from './ChildComponent';


export default function ParentPage() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div>
      <p>Status: {isLogin ? 'Logged In' : 'Logged Out'}</p>
      {/* 3. Pass the setter function here */}
      <ChildComponent setIsLogin={setIsLogin} />
    </div>
  );
}

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate passwords match before proceeding
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    // Add your sign-up logic here (e.g., call a Server Action)
  };

  return (
    <div className="flex flex-col items-center p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <h2 className="text-xl font-bold">Create Account</h2>
        
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          required
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          required
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />

        {/* Sign On Button */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign On
        </button>
      </form>
    </div>
  );
}
