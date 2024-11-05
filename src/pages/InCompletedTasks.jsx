import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Cards from '../components/Home/Cards';
const InCompletedTasks = () => {


  const [Data,setData]=useState();

  const headers={id:localStorage.getItem("id"),Authorization:`Bearer ${localStorage.getItem("token")}`};
  useEffect(()=>{
    const fetch=async ()=>{
      const response=await axios.get('http://localhost:4000/api/v1/getInCmpTasks',{headers}, {
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

export default InCompletedTasks
