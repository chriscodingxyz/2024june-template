import React from "react";
import Marquee from "react-fast-marquee";

export default function Footer() {
  return (
    <footer className="flex-center font-bold bg-background/90">
      <Marquee gradient={true} pauseOnHover>
        {`Typescript + React + Next.js + TailwindCSS + ShadCN + Toastify + Zod +
        React-Hook-Form + Zustand + Drizzle + NeonDB`}
      </Marquee>
    </footer>
  );
}
