import React,{useEffect, useState} from "react";
import NewCountriesCol9 from "./NewCountriesCol9";

let NewCountries =()=>{

    let [countries,setCountries] = useState([]);
    let [checkRegion,setCheckRegion] = useState([]);
    let [checkSuRegion,setCheckSuRegion] = useState([]);
    let [displayCheckRegion,setDisplayCheckRegion] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v2/all").then((res)=>{
            res.json().then((data)=>{
                setCountries(data);
                removeReDuplicate(data);
                removeSuDuplicate(data);

            })
        });
    },[]);
    
    function removeReDuplicate(data){
        var a = data.map((i)=>i.region)
        setCheckRegion([...new Set(a)]);
    };

    function removeSuDuplicate(data){
        var a = data.map((i)=>i.subregion)
        setCheckSuRegion([...new Set(a)]);
    };

    var handleCheck =(c)=>{
        if(c.target.checked===false){
            var spl = displayCheckRegion.indexOf(c.target.value);
            displayCheckRegion.splice(spl,1);
            setDisplayCheckRegion([...displayCheckRegion]);
        }
        else{
            setDisplayCheckRegion([...displayCheckRegion,c.target.value]);
        }
        console.log(c.target.value);
    };
    


    return (
        <div>
            <h1>Countries</h1>
            <hr />
            <div className="row">
                <div className="col-3 border">
                    <div className="col border border-2 p-2 rounded">
                        {
                            displayCheckRegion.map((disval)=>{
                                return <span className="border border-2 ms-1 rounded">{disval}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    </span>
                            })
                        }
                    </div>
                    <div className="mt-3">
                        <div>
                            <h3>Region</h3>
                            <ul type='none'>
                                {
                                    checkRegion.map((reg,i)=>{
                                        return (
                                            <li><input type="checkbox" value={reg} onChange={handleCheck}/>{reg}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>Subregion</h3>
                            <ul type='none'>
                                {
                                    checkSuRegion.map((sub)=>{
                                        return (
                                            <li><input type="checkbox"/>{sub}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div> 
                </div>
                
                <div className="col-9 border">
                    <div>
                        <NewCountriesCol9 countries={countries}></NewCountriesCol9>
                    </div> 
                                                                   
                </div>
            </div>
        </div>
    )
};

export default NewCountries; 