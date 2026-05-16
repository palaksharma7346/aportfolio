import { useState } from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  sendContactMessage,
} from "../../services/contactService";
const ContactForm = () => {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    await sendContactMessage(
      formData
    );

    toast.success(
      "Message sent successfully"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {

    toast.error(
      "Failed to send message"
    );

  }
};


  return (
    <motion.form
      initial={{ opacity: 0, x: 60 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 p-8 rounded-3xl"
    >

      {/* NAME */}
      <div className="mb-6">

        <label className="block text-white mb-3">
          Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-transparent focus:border-cyan-500"
        />

      </div>


      {/* EMAIL */}
      <div className="mb-6">

        <label className="block text-white mb-3">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-transparent focus:border-cyan-500"
        />

      </div>


      {/* MESSAGE */}
      <div className="mb-8">

        <label className="block text-white mb-3">
          Message
        </label>

        <textarea
          name="message"
          placeholder="Write your message..."
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-transparent focus:border-cyan-500 resize-none"
        />

      </div>


      {/* BUTTON */}
      <button
        type="submit"
        className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-black rounded-xl font-semibold transition"
      >
        Send Message
      </button>

    </motion.form>
  );
};

export default ContactForm;