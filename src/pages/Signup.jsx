import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';

const Signup = () => {  

  const history=useNavigate();

  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  // console.log("isloggedinSIgnup::",isLoggedIn);
  if(isLoggedIn===true){
    history('/');
  }


  const [Data, setData] = useState({ username: "", email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
    // console.log('DATA',Data);
  };
  const submit=async ()=>{
    try{
      if(Data.username==="" ||Data.email==="" || Data.password===""){
        alert("Alll fields are required");
      }
      else{
        const response=await axios.post("http://localhost:4000/api/v1/signup",Data, {
          headers: {
            'Content-Type': 'application/json' // Only if needed
          }
        });
        setData({username:"",email:"",password:""});
        alert(response.data.message);
        console.log(response);
        history('/login');
      }

    }catch(error){
      alert(error.response.data.message);
      console.log(error);
    }
  }
  return (
    <div className="h-[98vh]  flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold">Signup</div>
        <input
          type="username"
          placeholder="usename"
          className="bg-gray-700 px-3 py-3 my-3 w-full rounded"
          name="username"
          value={Data.username}
          onChange={change}
        ></input>
        <input
          type="text"
          placeholder="email"
          className="bg-gray-700 px-3 py-3 my-3 w-full rounded"
          name="email"
          value={Data.email}
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
          <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded" onClick={submit}>
            SignUp
          </button>
          <Link to="/login" className="text-gray-500 hover:text-gray-400">
            Having an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
