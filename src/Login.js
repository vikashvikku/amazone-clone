import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className=" form">
      <h1 className="login ">Login</h1>

      {/* UserName */}

      <div class=" name">
        <div class="relative">
          <label for="message" class=" mobile">
            Mobile No.
          </label>
          <input
            type={"number"}
            id="message"
            name="message"
            class="input-filed w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>

      {/* Password */}

      <div class="p-2 w-full md:w-1/3">
        <div class="relative">
          <label for="message" class="leading-7 text-sm text-gray-300">
            Password
          </label>
          <input
            id="message"
            name="message"
            class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>

      {/* Submit Button */}

      <div class="p-2 w-full">
        <button class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
          Login
        </button>
      </div>
      <div>
        <p>
          {" "}
          Do not have account?
          <span className="text-blue-500"> Sign Up</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
