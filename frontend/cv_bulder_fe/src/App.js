import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import FormattingSection from './component/FormattingSection';
import React, { useEffect } from 'react';
import Coverletter from './component/Coverletter';
import CoverLetterForm from './component/CoverLetterForm';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/coverletterform' element={<CoverLetterForm/>}></Route>
        <Route path='/editcoverletter' element={<Coverletter/>}></Route>
        <Route path='/editcv' element={<FormattingSection/>}></Route>
        <Route path='/' element={ <Home/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
