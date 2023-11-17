import React,{useState} from "react";

function Todoli(){
    var [todos,setTodos] = useState([]);
    var add= ()=>{
        var newinp = document.getElementById('inp').value;
        setTodos([...todos,newinp]);
    }
    return (
        <div className='border border-4 m-2 p-2 border-warning'>
            <h2>Todolist</h2>
            <input type="text" id="inp" className='rounded'/>
            <button onClick={add} className='rounded ms-3'>Add Task</button>
            <ul>
                {
                    todos.map((value)=>{
                        return (
                            <li>{value}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default Todoli;