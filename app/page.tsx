"use client";

import Hero from "./Hero";
import AuthModal from "./AuthModal";
import { useState } from "react";
import Homesections from "./Homesections";
import Footer from "./Footer";
import Navbarsection from "./Navbarsection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbarsection />
      <Hero setIsModalOpen={setIsModalOpen} />
      <Homesections />
      <Footer />
      {isModalOpen && (
        <>
      
          <AuthModal onClose={() => setIsModalOpen(false)} />
          <div className="dark-overlay" />
          
        </>
      )}
    </>
  );
}
