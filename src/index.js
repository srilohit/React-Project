import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewCountries from './countryProject/NewCountries';
import Country from './Country';
import CountryDetails from './CountryDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    { 
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/countries',
                element:<NewCountries></NewCountries>
            },
            {
                path:'/country',
                element:<Country></Country>
            },
            {
                path:'/countryDetails/:nam/:cap/:pop/:fla',
                element:<CountryDetails></CountryDetails>
            }

        ]
    }
])
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
