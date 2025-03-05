"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us 📩</h1>
      <p className="text-gray-600 mb-4">Have any questions or feedback? Feel free to reach out!</p>

      {submitted ? (
        <p className="text-green-500">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Send Message
          </button>
        </form>
      )}

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Other Ways to Reach Us</h2>
        <p className="text-gray-600 mt-2">📧 Email: contact@moviewebsite.com</p>
        <p className="text-gray-600">📍 Address: 123 Movie St, Film City</p>
      </div>
    </main>
  );
}
