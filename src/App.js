
import React from 'react';
import './App.css';
// import Counter from './cls/Counter';
// import Todoli from './cls/todoli';
// import Formlist from './cls/form';
// import Countries from './cls/Countries';
// import Todolist from './todolis/Todolist';
// import Arth from './useRefff/Arth';
// import Products from './cartProject/Products';
import { Link, Outlet } from 'react-router-dom';
// import Cardsample from './Cardsample';

 
function App() {
  return (
    <div>
      {/* <h1>Welcome to Edupoly ReactJS</h1> */}
      {/* <Counter></Counter> */}
      {/* <Todoli></Todoli> */}
      
      {/* <div className='border border-5 m-2 p-2 border-secondary'>
        <Formlist></Formlist>
      </div> */}
      {/* <Countries></Countries> */}
      {/* <Todolist></Todolist> */}
      {/* <Arth></Arth> */}
       {/* <Products></Products> */}
      {/* <Cardsample></Cardsample> */}
      <Link to={"/countries"} className={'text-decoration-none'}><h6 className='border border-2 bg-dark p-3'>Countries</h6></Link>
      <Link to={"/country"} className={'text-decoration-none'}><h6 className='border border-2 bg-dark p-3'>Country</h6></Link>
      <Outlet></Outlet>
    </div>
    
  );
}

export default App;
