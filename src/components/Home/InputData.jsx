import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const InputData = ({ inputDiv, setinputDiv, UpdatedData,setUpdatedData}) => {
  const [Data, setData] = useState({ title: "", desc: "" });

  useEffect(() => {
    setData({ title: UpdatedData.title, desc: UpdatedData.desc });
  }, [UpdatedData]);

  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submitData = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("All fields are required");
    } else {
      await axios.post("http://localhost:4000/api/v1/create-task", Data, {
        headers,
      });
      setData({ title: "", desc: "" });
      setinputDiv("hidden");
    }
  };

  const UpdateTask=async()=>{
    if (Data.title === "" || Data.desc === "") {
      alert("All fields are required");
    } else {
      await axios.put(`http://localhost:4000/api/v1/update-task/${UpdatedData.id}`, Data, {
        headers,
      });
      setData({ title: "", desc: "" });
      setUpdatedData(
        { id:"",
        title:"",
        desc:""})
      setinputDiv("hidden");
    }

  }

  return (
    <>
      {/* <div className={`${inputDiv} top-0 left-0 bg-gray-800 h-screen w-full opacity-80'`}>
    </div> */}
      <div
        className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-90 h-screen w-full  flex items-center justify-center`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end ">
            <button className="text-2xl" onClick={() =>{ setinputDiv("hidden");
              setData({
                title:"",
                desc:""})
              setUpdatedData(
                { id:"",
                title:"",
                desc:""}
              )
            }
            }>
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={Data.title}
            onChange={change}
            className="px-3 py-2 rounded w-full my-3 bg-gray-800"
          />
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description..."
            value={Data.desc}
            onChange={change}
            className="px-3 py-2 rounded w-full bg-gray-800 my-3"
          ></textarea>
          <div className="flex justify-center">

            {UpdatedData.id=== "" ?             <button
              className="px-3 py-2 bg-blue-500 rounded text-black text-xl font-semibold "
              onClick={submitData}
            >
              Submit
            </button> :

            <button
              className="px-3 py-2 bg-blue-500 rounded text-black text-xl font-semibold "
              onClick={UpdateTask}
            >
              Update
            </button>
}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
