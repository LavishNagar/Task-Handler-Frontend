import React,{useEffect, useState} from 'react'
import Cards from '../components/Home/Cards';
import axios from 'axios';

const ImportantTasks = () => {
  const [Data,setData]=useState();

  const headers={id:localStorage.getItem("id"),Authorization:`Bearer ${localStorage.getItem("token")}`};
  useEffect(()=>{
    const fetch=async ()=>{
      const response=await axios.get('https://task-handle-backend-1.onrender.com/api/v1/getImpTasks',{headers}, {
        headers: {
          'Content-Type': 'application/json' // Only if needed
        }
      });
      // console.log("res",response);
      setData(response.data.data);
      // console.log("impData",Data);
    };
    fetch();
    });
    
  



  return (
    <div>
      <Cards home={"false"} data={Data}/>
    </div>
  )
}

export default ImportantTasks
