"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Hero({
  setIsModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <button
                className="btn home__cta--btn"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Login
              </button>
            </div>
            <figure className="landing__image--mask">
              <img
                src="https://summarist.vercel.app/_next/static/media/landing.e4787d01.png"
                alt="landing"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
