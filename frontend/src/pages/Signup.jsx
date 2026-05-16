import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { signupUser } from "../services/authservice";

import { useAuth } from "../context/AuthContext";


const Signup = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
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
      const data =
        await signupUser(formData);

      login(data);

      toast.success(
        "Signup successful"
      );

      navigate("/dashboard");

    } catch (error) {
      toast.error(
        error.response?.data?.message
      );
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl"
      >

        <h2 className="text-4xl font-bold text-center mb-8">
          Signup
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-5 p-4 rounded-xl bg-slate-800 outline-none"
        />


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-5 p-4 rounded-xl bg-slate-800 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-4 rounded-xl bg-slate-800 outline-none"
        />

        <label className="block mb-2 text-slate-300">
    Role
  </label>

  <input
    type="text"
    value="User"
    disabled

    className="
      w-full
      mb-6
      p-4
      rounded-xl
      bg-slate-800
      cursor-not-allowed
    "
  />

        <button
          type="submit"
          className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 transition rounded-xl font-semibold"
        >
          Signup
        </button>

      </form>

    </div>
  );
};

export default Signup;