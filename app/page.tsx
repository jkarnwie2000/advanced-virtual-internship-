"use client";

import Hero from "./Hero";
import AuthModal from "./AuthModal";
import { useState } from "react";
import Homesections from "./Homesections";
import Footer from "./Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Hero setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <>
      <Homesections />
      <Footer />
          <AuthModal onClose={() => setIsModalOpen(false)} />
          <div className="dark-overlay" />
        </>
      )}
    </>
  );
}
