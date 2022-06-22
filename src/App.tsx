import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Entrepreneurship } from './MainPage';
import {Page2} from './MyLibraryPage';
import {BookView} from './BookViewPage';
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import LoginButton from './loginButton';
import {useAuth0} from '@auth0/auth0-react';
import LogoutButton from './Logout';
import {useState} from 'react';
import Main1 from './main';
import Header from './Components/Organisms/HeaderBar/HeaderBar'
function App() {
  const { isLoading,isAuthenticated} = useAuth0();
  if(isLoading 
  ){
    return <div>Loading...</div>
  }
  return (
   <>

      
     {(!isAuthenticated)? <Router><Header/></Router>: null}
        
        
        
        {isAuthenticated &&
         <Main1 />
    }

    </>
  );
}

export default App;
