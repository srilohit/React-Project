import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CountryDetails(){
    var res = useParams();
    var [cDetails,setCDetails] = useState({});
    console.log(res);

    useEffect(()=>{
        if(res.nam){
            axios.get(`https://restcountries.com/v2/name/${res.nam}`).then((response)=>{
                setCDetails({...response.data})
            })
        }
    },[res.nam]);
    return(
        <div>
            <h1>Name:{res.nam}</h1>
            {
                cDetails[0] && (
                    <div>
                        <h1>Capital:{cDetails[0].capital}</h1>
                        <h1>Population:{cDetails[0].population}</h1>
                        <img src={cDetails[0].flag} width="20%" alt="" />
                    </div>
                )
            }
        </div>
    )
}
export default CountryDetails;