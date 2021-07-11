import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import SideMenu from '../components/SideMenu';
import { makeStyles, CssBaseline  } from '@material-ui/core';
import Header from '../components/Header';
// import RightMenu from '../components/RightMenu';
import Blog from '../components/Blog';
// import ReactDOM from 'react-dom'


const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width: '100%'

  }
})



function App() {
  const classes = useStyles();
  return (

    
    <>
    <Blog/>

  
  </>
    
   
  );
}


export default App;
