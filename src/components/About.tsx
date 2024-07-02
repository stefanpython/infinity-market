import React from "react";

export default function About() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-[800px] text-center">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="mb-4 text-lg">
          Infinity market is a fictional e-commerce application designed to
          showcase the features and capabilities of React and Vite.
        </p>
        <p className="mb-4 text-lg">
          The application features a responsive and mobile-friendly user
          interface, as well as a shopping cart and a checkout process.
        </p>
        <p className="mb-4 text-lg">
          The codebase includes examples of using React hooks, context, and
          routing.
        </p>
      </div>
    </section>
  );
}
