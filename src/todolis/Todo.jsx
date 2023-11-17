import React, { useEffect } from "react";

function Todo(props){

    useEffect(()=>{
        
    });
    return(
        <div>
            <li className="border border-1 border-danger rounded w-25 p-2 m-2 d-flex justify-content-between">
                {props.t}
                <button className="btn btn-outline-danger" onClick={()=>{props.deltodo(props.i)}}>delete</button>
            </li>
        </div>
    )
}
export default Todo;
