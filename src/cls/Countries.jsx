import React,{useEffect, useState} from "react";

function Countries(){ 
    var [count,setCount] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all').then((res)=>{
            res.json().then((data)=>{
                setCount(data)
            })
        })
    },[]);
    
    return(
        <div className='border border-5 m-2 p-2 border-sucess'>
            <h1>hello</h1>
            <table className="table table-bordered border-dark w-50">
                <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th className="text-center">Flag</th>
                    </tr>
                </thead>
                <tbody>
                {
                    count.map((e)=>{
                       return (
                            <tr> 
                                <td>{e.name}</td>
                                <td>{e.capital}</td>
                                <td>{e.region}</td>
                                <td>{e.population}</td>
                                <td><img src={e.flags.png} alt="flag"/></td>
                            </tr>
                       )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default Countries;