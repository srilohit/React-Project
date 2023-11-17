import React,{useEffect, useRef} from "react";
import Another from "../useRefff/Another";

function Arth(){
    
    var ref1 = useRef();
    var ref2 = useRef();
    var ref3 = useRef();

    useEffect(()=>{
        ref1.current.focus();
    },[]);
    var checkenter =(e)=>{
        if(e.key==='Enter'){
            ref2.current.focus();
        }
    };
    var checkenter2 =(e)=>{
        if(e.key==='Enter'){
            ref3.current.focus();
        }
    };

    return (
        <div className='border border-4 m-2 p-2 w-50 border-success rounded'>
            <h1>Arth</h1>
            <input type="text" ref={ref1} onKeyUp={checkenter} className='rounded'/>
            <input type="text" ref={ref2} onKeyUp={checkenter2} className='ms-3 rounded'/>
            <button className='ms-3 btn btn-outline-primary rounded'>text box focus</button>
            <Another ref={ref3}></Another>
        </div>
    )
};

export default Arth;