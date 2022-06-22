import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Entrepreneurship } from './MainPage';
import {Page2} from './MyLibraryPage';
import {BookView} from './BookViewPage';
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

function Main1() {
    
    return (
     <>
     {console.log("inside main return fn")}
      <div className="App">
         <Router>
           
       <Routes>
       
           < Route path='/' element={<Page2 />} />
           < Route path='/bookview' element={<BookView />} /> 
           < Route path='/bookcat' element={<Entrepreneurship />} />
  
         </Routes>
      
      </Router>
      </div>
      
  
      </>
    );
  }
  
  export default Main1;