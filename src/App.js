
import Home from './pages/Home'
import { Routes, Route, useNavigate  } from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import ImportantTasks from './pages/ImportantTasks';
import CompletedTasks from './pages/CompletedTasks';
import InCompletedTasks from './pages/InCompletedTasks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from './store/auth';

const App = () => {
  const navigate=useNavigate();
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  // console.log('isloggedin::',isLoggedIn);//false
  const dispatch=useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      
     dispatch(authActions.login());
     //output is true of islogggedin
    }
    else if(isLoggedIn===false){
      navigate('/signup');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative font-abc'>

  <Routes>
  <Route exact path='/' element={<Home />} >
  <Route index element={<AllTasks/>} />
  <Route path="/importantTasks" element={<ImportantTasks/>} />
  <Route path="/completedTasks" element={<CompletedTasks/>} />
  <Route path="/inCompletedTasks" element={<InCompletedTasks/>} />
  
  </Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  </Routes>




     
    </div>
  )
}

export default App
