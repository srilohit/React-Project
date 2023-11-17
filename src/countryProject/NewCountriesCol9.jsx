import React,{useState, useEffect} from "react";
function NewCountriesCol9(props){

    //let [allData,setAllData] = useState([]);
    let [orderCountry,setOrderCountry] = useState([]);
    let [searched,setSearched] = useState([]);
    let [listCountry,setListCountry] = useState([]);
    let [gridCountry,setGridCountry] = useState([]);

    console.log(gridCountry);
    var asce =()=>{
        var asc = orderCountry.sort((a,b)=>{
            var coso1 = a.population;
            var coso2 = b.population;

            if(coso1<coso2){
                return -1;
            }
            if(coso1>coso2){
                return 1;
            }
            return 0;
        });
        //console.log(asc);
        setOrderCountry([...asc]);
    }; 

    var desc =()=>{
        var des = orderCountry.sort((a,b)=>{
            var coso1 = a.population;
            var coso2 = b.population;

            if(coso1>coso2){
                return -1;
            }
            if(coso1<coso2){
                return 1;
            }
            return 0;
        });
        //console.log(des);
        setOrderCountry([...des])
    };

    var search =(e)=>{
        var filteredCount = orderCountry.filter((country)=>{
            return (country.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
        });
        console.log(filteredCount);
        setSearched([...filteredCount]);
        
    };

    var lists =()=>{
        setListCountry(searched);
        //console.log([searched]);
    };

    var grids =()=>{
        setGridCountry(searched);
    }

    useEffect(()=>{
        setSearched(props.countries);
        setOrderCountry(props.countries);  
    },[props.countries]);

    return (
        <div>
            <div className="col border border-2 p-1 rounded">
                <div className="d-flex justify-content-between">
                    <b>Sort by population</b>
                    <b onClick={asce}>Ascending</b>
                    <b onClick={desc}>descending</b>
                    <input onChange={search} type="search " className="rounded" placeholder="Search..."/>
                    <div>
                        <svg onClick={lists} xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-list-ul me-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>

                        <svg onClick={grids} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                        <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        props.countries ? (
                            orderCountry.map((fla)=>{
                                return (
                                    <div className="m-1">
                                        <b>{fla.name}</b>
                                        <img src={fla.flags.png} width='250px' height='150px' className="d-flex" alt="" />
                                        <b className="d-flex flex-col justify-content-end">population:{fla.population}</b>
                                    </div>
                                )
                            })
                        )
                        : (    
                            listCountry.map((lis)=>{
                                return (
                                    <div className="m-1 d-flex">
                                        <img src={lis.flags.png} width='250px' height='150px' alt="" />
                                        <div>
                                            <h2 className=" d-flex">{lis.name}</h2>
                                            <b className="d-flex flex-col">population:{lis.population}</b>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }                          
                </div> 
                <div>
                    {   
                        listCountry 
                    }
                </div>
            </div>
        </div>
    )
}

export default NewCountriesCol9;