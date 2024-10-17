import React from "react";
import Cards from "../components/Home/Cards";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import InputData from "../components/Home/InputData";

const AllTasks = () => {
    const [inputDiv,setinputDiv] = useState("hidden");
  return (
    <> 
    <div>
      <div className="w-full flex justify-end px-4 py-2">
        <button onClick={()=>setinputDiv("fixed")}>
          <IoIosAddCircle className="text-4xl text-gray-400 hover:text-gray-200 transition-all duration-300" />
        </button>
      </div>
      <Cards home={"true"} setinputDiv={setinputDiv}></Cards>
    </div>
    <InputData inputDiv={inputDiv} setinputDiv={setinputDiv}/>
    </>
   
  );
};

export default AllTasks;
