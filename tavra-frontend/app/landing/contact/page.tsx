// pages/contact.jsx

import React from "react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16 lg:px-24 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          We’d love to hear from you! Whether you’re curious about Tavra, need
          support, or want to collaborate — we’re just a message away.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="How can we help you?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-3">Other Ways to Reach Us</h2>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:hello@tavra.ai"
            className="text-blue-600 hover:underline"
          >
            hello@tavra.ai
          </a>
        </p>
        <p className="mb-2">🌐 Website: www.tavra.ai</p>
        <p>📍 Location: Lagos, Nigeria</p>
      </div>
    </section>
  );
}
