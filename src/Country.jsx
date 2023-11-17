import axios from "axios";
import React,{useState} from "react";
import { Link } from "react-router-dom";

function Country(){
    var [countr,setCountr] = useState([]);
    axios.get("https://restcountries.com/v2/all").then((res)=>{
            setCountr(res.data);
    })
    return (
        <div>
            {
                countr.map((c)=>{
                   return (
                        <li>
                            <Link to={`/countryDetails/${c.name}/${c.capital}/${c.population}/${c.flag.png}`}>{c.name}</Link>
                        </li>
                   )
                })
            }
        </div>
    )
}
export default Country;