import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant} from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import {Link } from "react-router-dom"

const Sidebar = () => {
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
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">The Lavish Nagar</h2>
        <h4 className="my-1 text-gray-500">lsh@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="my-2 flex items-center hover:bg-gray-700 p-2 transition-all duration-300 gap-x-3 ">{items.icon}{items.title}</Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
