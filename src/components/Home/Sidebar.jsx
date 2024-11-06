import React, { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant} from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import {Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useEffect } from "react";
import axios from "axios";

const Sidebar = () => {
  const dispatch=useDispatch();
  const history=useNavigate();
  const data = [
    {
      title: "All tasks",
      icon:<CgNotes/>,
      link:"/",
    },
    { title: "Important tasks",
        icon:<MdLabelImportant/>,
        link:"/importantTasks"
     },
    {
      title: "Completed tasks",
      icon:<FaCheckDouble/>,
      link:"/completedTasks"
    },
    {
      title: "InCompleted tasks",
      icon:<TbNotebookOff/>,
      link:"/inCompletedTasks"
    },
  ];

  const [Data,setData]=useState();

  const logout=()=>{
    localStorage.clear("id");
    localStorage.clear("token");
    dispatch(authActions.logout());
    history('/signup');
  }
  const headers={id:localStorage.getItem("id"),Authorization:`Bearer ${localStorage.getItem("token")}`};
  // console.log("id",headers.id);
  // console.log("headers",headers);
  // console.log("token",headers.Authorization);
useEffect(()=>{
const fetch=async ()=>{
  const response=await axios.get('https://task-handle-backend-1.onrender.com/api/v1/getAllTasks',{headers}, {
    headers: {
      'Content-Type': 'application/json' // Only if needed
    }
  });
  // console.log("res",response);
  setData(response.data.data)
};
fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

  return (
    <>
      {Data && <div>
        <h2 className="text-xl font-semibold">{Data.username}</h2>
        <h4 className="my-1 text-gray-500">{Data.email}</h4>
        <hr />
      </div>}
      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="my-2 flex items-center hover:bg-gray-700 p-2 transition-all duration-300 gap-x-3 ">{items.icon}{items.title}</Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded" onClick={logout}>Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
