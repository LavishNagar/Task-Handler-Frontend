import React from "react";
import Cards from "../components/Home/Cards";
import { useState,useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import InputData from "../components/Home/InputData";
import axios from "axios";

const AllTasks = () => {
    const [inputDiv,setinputDiv] = useState("hidden");
    const [Data,setData]=useState();

    const [UpdatedData,setUpdatedData]=useState({
      id:"",
      title:"",
      desc:"",
    })

    const headers={id:localStorage.getItem("id"),Authorization:`Bearer ${localStorage.getItem("token")}`};
    useEffect(()=>{
      const fetch=async ()=>{
        const response=await axios.get('http://localhost:4000/api/v1/getAllTasks',{headers}, {
          headers: {
            'Content-Type': 'application/json' // Only if needed
          }
        });
        // console.log("res",response);
        setData(response.data.data)
      };
      fetch();
      });
    
  return (
    <> 
    <div>
      <div className="w-full flex justify-end px-4 py-2">
        <button onClick={()=>setinputDiv("fixed")}>
          <IoIosAddCircle className="text-4xl text-gray-400 hover:text-gray-200 transition-all duration-300" />
        </button>
      </div>
      {Data &&<Cards home={"true"} setinputDiv={setinputDiv} data={Data.tasks} setUpdatedData={setUpdatedData}></Cards>}
    </div>
    <InputData inputDiv={inputDiv} setinputDiv={setinputDiv} UpdatedData={UpdatedData}
    setUpdatedData={setUpdatedData}
    />
    </>
   
  );
};

export default AllTasks;
