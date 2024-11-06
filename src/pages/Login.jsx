import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { authActions } from "../store/auth";
import { useDispatch ,useSelector} from 'react-redux';



const Login = () => {
  const history=useNavigate();
  
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  if(isLoggedIn===true){
    history('/');
  }


  const [Data, setData] = useState({ username: "", password: "" });
  const dispatch=useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    try {
      if (Data.username === "" || Data.password === "") {
        alert("Alll fields are required");
      } else {
        const response = await axios.post(
          "https://task-handle-backend-1.onrender.com/api/v1/login",
          Data,
          {
            headers: {
              "Content-Type": "application/json", // Only if needed
            },
          }
        );
        setData({ username: "", password: "" });

        // console.log(response);
        // console.log(response.data.id);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        dispatch(authActions.login());
        history('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[98vh]  flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold">LogIn</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-3 my-3 w-full rounded"
          name="username"
          value={Data.username}
          onChange={change}
        ></input>

        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-3 my-3 w-full rounded"
          name="password"
          value={Data.password}
          onChange={change}
        ></input>

        <div className="w-full flex items-center justify-between">
          <button
            className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded"
            onClick={submit}
          >
            Login
          </button>
          <Link to="/signup" className="text-gray-500 hover:text-gray-400">
            Not having an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
