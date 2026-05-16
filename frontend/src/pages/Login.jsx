import { useState } from "react";

import { useNavigate }
from "react-router-dom";

import toast
from "react-hot-toast";

import {
  loginUser,
} from "../services/authservice";

import {
  useAuth,
} from "../context/AuthContext";


const Login = () => {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();


  const [formData,
    setFormData] =
      useState({

        email: "",

        password: "",

        role: "user",
      });


  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };


  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          await loginUser(
            formData
          );

        login(data);

        toast.success(
          "Login successful"
        );



        if (
          data.user.role ===
          "admin"
        ) {

          navigate(
            "/dashboard"
          );

        }

        else {

          navigate("/");
        }

      } catch (error) {

        toast.error(

          error.response
            ?.data?.message ||

          "Login failed"
        );
      }
    };


  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl"
      >

        <h2 className="text-4xl font-bold text-center mb-8 text-white">

          Login

        </h2>


        <input
          type="email"

          name="email"

          placeholder="Email"

          value={formData.email}

          onChange={handleChange}

          className="w-full mb-5 p-4 rounded-xl bg-slate-800 outline-none text-white"
        />


        <input
          type="password"

          name="password"

          placeholder="Password"

          value={formData.password}

          onChange={handleChange}

          className="w-full mb-5 p-4 rounded-xl bg-slate-800 outline-none text-white"
        />


        <select
          name="role"

          value={formData.role}

          onChange={handleChange}

          className="
            w-full
            mb-6
            p-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            text-white
          "
        >

          <option value="user">
            User
          </option>

          <option value="admin">
            Admin
          </option>

        </select>


        <p className="text-sm text-slate-400 mb-6 text-center">

          Admin access is restricted
          to authorized accounts only.

        </p>


        <button
          type="submit"

          className="
            w-full
            py-4
            bg-cyan-500
            hover:bg-cyan-600
            transition
            rounded-xl
            font-semibold
            text-black
          "
        >

          Login

        </button>

      </form>

    </div>
  );
};

export default Login;