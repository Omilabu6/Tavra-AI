// pages/docs.jsx

import React from "react";

export default function Documentation() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16 lg:px-24 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
          Tavra AI Documentation
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-16">
          Learn how Tavra AI works, how to use it, and how it’s shaping the future of interactive learning.
        </p>

        {/* INTRODUCTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Tavra AI is an intelligent learning platform designed to make tech education
            personal, adaptive, and engaging. Instead of navigating through static courses,
            users learn by chatting directly with an AI mentor that guides them step-by-step,
            creates personalized roadmaps, and provides hands-on challenges.
          </p>
        </div>

        {/* GETTING STARTED */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Getting Started</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To get started with Tavra AI:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Visit our homepage and join the waitlist.</li>
            <li>Once you’re in, create a profile and select your preferred tech field (e.g., web development, data science, or AI).</li>
            <li>Start chatting with Tavra — your personalized AI mentor will guide you from beginner to expert.</li>
          </ul>
        </div>

        {/* CORE FEATURES */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Core Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>AI Mentorship:</strong> Personalized conversations that adapt to your skill level.</li>
            <li><strong>Interactive Learning:</strong> Quizzes, challenges, and instant feedback.</li>
            <li><strong>Smart Roadmaps:</strong> Auto-generated learning paths for every user goal.</li>
            <li><strong>Progress Tracking:</strong> See your growth in real-time.</li>
            <li><strong>AI Collaboration:</strong> Work on mini projects with guidance from Tavra.</li>
          </ul>
        </div>

        {/* FOR DEVELOPERS */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">For Developers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tavra AI is powered by OpenAI’s API for natural conversation, built with Next.js
            and Tailwind CSS for a smooth user experience. Our architecture focuses on speed,
            scalability, and AI-driven adaptability.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Frontend: Next.js + Tailwind CSS + Framer Motion</li>
            <li>Backend: Node.js + OpenAI API</li>
            <li>Deployment: Vercel / Netlify</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Support & Feedback</h2>
          <p className="text-gray-700 leading-relaxed">
            We’re always improving Tavra AI. If you encounter any issues, have ideas, or want to contribute,
            reach out at <a href="mailto:hello@tavra.ai" className="text-blue-600 hover:underline">hello@tavra.ai</a>.
            Join us in shaping the next generation of learning.
          </p>
        </div>

        <p className="text-center text-gray-500 mt-12">
          © {new Date().getFullYear()} Tavra AI. All rights reserved.
        </p>
      </div>
    </section>
  );
}
