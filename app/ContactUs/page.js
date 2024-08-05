"use client"
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-12 p-8 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-slate-400 mb-6">Contact Us</h1>
      
      <p className="text-white mb-6">
        We would love to hear from you! Whether you have a question, feedback, or need assistance, you can reach out to us using the following methods.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">Email</h2>
      <p className="text-white mb-6">
        For general inquiries, support, or partnership opportunities, please email us at: 
        <a href="mailto:krisjchetangangajaliya@gmail.com" className="text-blue-400 underline"> krisjchetangangajaliya@gmail.com</a>.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">Phone</h2>
      <p className="text-white mb-6">
        You can also reach us by phone during our business hours (Monday to Friday, 9 AM - 6 PM):
        <br />
        <span className="text-blue-400 underline">+91 9316876023</span>
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">Office Address</h2>
      <p className="text-white mb-6">
        Our office is located at:
        <br />
        <span className="block">Jinan Residency 2</span>
        <span className="block">Near Kabir Ceramics</span>
        <span className="block">Gota Cross Road, Ahmedabad 382481</span>
        <span className="block">Gujarat, India</span>
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">Social Media</h2>
      <p className="text-white mb-6">
        Stay connected and follow us on social media for updates, news, and more:
      </p>
      <ul className="list-none text-white space-y-2">
        <li>
          <a href="https://www.facebook.com/krishgangajaliya?mibextid=2JQ9oc" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/krrish_145/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/krish-gangajaliya-802b79266/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">Contact Form</h2>
      <p className="text-white mb-6">
        You can also use the contact form below to send us a message directly from the website:
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-white block mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" required />
        </div>
        <div>
          <label htmlFor="email" className="text-white block mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" required />
        </div>
        <div>
          <label htmlFor="message" className="text-white block mb-2">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {success === true && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      {success === false && <p className="text-red-500 mt-4">Failed to send the message. Please try again later.</p>}
    </div>
  );
};

export default ContactUs;
