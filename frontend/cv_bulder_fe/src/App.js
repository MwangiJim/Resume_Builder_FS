import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import FormattingSection from './component/FormattingSection';
import React, { useEffect } from 'react';
import Coverletter from './component/Coverletter';
import CoverLetterForm from './component/CoverLetterForm';
import AuthSection from './component/AuthSection';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUserDetails } from './redux/SliceReducer';
import { useDispatch } from 'react-redux';

function App() {
  const auth = getAuth();
  const[user,setUser]=React.useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,(AuthUser)=>{
      if(AuthUser){
         setUser(AuthUser);
         console.log('User is Logged in')
         dispatch(setUserDetails({
          Name:AuthUser.displayName,
          PhotoUrl:AuthUser.photoURL,
          Email:AuthUser.email
         }))
      }
      else{
        setUser(null);
        console.log('User is logged out!!')
      }
    })
  })

  return (
    <div className="App">
      {user?<BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/coverletterform' element={<CoverLetterForm/>}></Route>
        <Route path='/editcoverletter' element={<Coverletter/>}></Route>
        <Route path='/editcv' element={<FormattingSection/>}></Route>
        <Route path='/' element={ <Home/>}></Route>
      </Routes>
     </BrowserRouter>:<AuthSection/>}
    </div>
  );
}

export default App;
