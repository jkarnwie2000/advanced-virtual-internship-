"use client";

import Hero from "./Hero";
import AuthModal from "./AuthModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Hero setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <>
          <AuthModal onClose={() => setIsModalOpen(false)} />
          <div className="dark-overlay" />
        </>
      )}
    </>
  );
}
