import React from "react";

function Another(props,refs){

    return (
        <div className='border border-4 m-2 p-2 border-info rounded'>
            <h2>Another</h2>
            <input type="text" ref={refs} className='ms-3 rounded'/>
        </div>
    )
}

export default React.forwardRef(Another);