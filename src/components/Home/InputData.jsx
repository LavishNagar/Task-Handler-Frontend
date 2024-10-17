
import { RxCross2 } from "react-icons/rx";

const InputData = ({inputDiv,setinputDiv}) => {

  return (
   <>
   {/* <div className={`${inputDiv} top-0 left-0 bg-gray-800 h-screen w-full opacity-80'`}>
    </div> */}
    <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-90 h-screen w-full  flex items-center justify-center`}>
        
        <div className='w-2/6 bg-gray-900 p-4 rounded'>


        <div className='flex justify-end '>
            <button className='text-2xl' onClick={()=>setinputDiv("hidden")}><RxCross2/></button>
            
            </div>
        <input type="text" placeholder='Title' name="title" className='px-3 py-2 rounded w-full my-3 bg-gray-800'/>
        <textarea name='desc' cols='30' rows='10' placeholder='Description...' className='px-3 py-2 rounded w-full bg-gray-800 my-3' ></textarea>
        <div className='flex justify-center'>
        <button className='px-3 py-2 bg-blue-500 rounded text-black text-xl font-semibold '>Submit</button></div>
        </div>
    </div>
    </>
  )
}

export default InputData
