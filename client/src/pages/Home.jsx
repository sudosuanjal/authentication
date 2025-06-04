import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome 👋</h1>
        <p className="mb-4 text-lg">
          I'm <span className="font-semibold text-blue-400">Anjal</span>, a
          developer who enjoys building things from scratch — even when there
          are ready-made tools available.
        </p>
        <p className="mb-4 text-lg">
          This is an authentication app I created just for fun. I usually rely
          on third-party services like Clerk, Google Auth, Supabase, or Appwrite
          for authentication. But this time, I wanted to get my hands dirty and
          build the full auth system myself.
        </p>
        <p className="mb-4 text-lg">
          Through this project, I explored core concepts like JWTs, cookies,
          email verification, password hashing, and more. It was a great way to
          understand what really goes on behind those “Sign In with Google”
          buttons.
        </p>
        <p className="text-lg mb-6">Thanks for checking it out!</p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/sudosuanjal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://x.com/sudosuanjal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            X (Twitter)
          </a>
          <a
            href="https://www.linkedin.com/in/sudosuanjal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
