
import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

 
function App() {
  return (
    <div>
    
      <Link to={"/countries"} className={'text-decoration-none'}><h6 className='border border-2 bg-dark p-3'>Countries</h6></Link>
      <Outlet></Outlet>
    </div>
    
  );
}

export default App;
