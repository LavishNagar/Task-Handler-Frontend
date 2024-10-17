
import {CiHeart} from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";


const Cards = ({home,setinputDiv}) => {
  const data = [
    {
      title: "the best coding channel",
      desc: "i have to create my channel the bese ever codeing in hindi for those who do not understand english pro,",
      status:"InComplete",
    },
    {
      title: "Cpp Concepts",
      desc: "I need to clear basics of Cpp. Topics polymorphism, virtual programming",
      status:"Complete",
    },
    {
      title: "Assignment",
      desc: "my Assignment on 20 march. I have to complete it",
      status:"InComplete"
    },
    {
      title: "Projects",
      desc: "For Project I need tose controller ",
      status:"InComplete"
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4 font-abc">
      {data &&
        data.map((items, i) => (
          <div className=" flex flex-col justify-between rounded-sm bg-gray-800 p-4">
            <div className="">
              <h1 className="text-xl font-semibold">{items.title}</h1>
              <p className="text-gray-300 my-2">{items.desc}</p></div>
              <div className="mt-4 w-full flex items-center ">
              <button className={`${items.status==="InComplete" ? "bg-red-500":"bg-green-700"} p-2 rounded w-3/6 `}>{items.status}</button>
              <div className="text-white p-2 w-3/6 text-2xl flex justify-around font-semibold">
                <button><CiHeart/></button>
                <button><FaEdit/></button>
                <button><MdDelete/></button>
                </div>
            </div>
          </div>
        ))}

        {home ==="true" && (<button className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-400 hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>setinputDiv("fixed")}>
        <IoIosAddCircle className="text-6xl"/>
        <h2 className="text-2xl mt-4">Add Task</h2>
        </button>)}
        
    </div>
  );
};

export default Cards;
