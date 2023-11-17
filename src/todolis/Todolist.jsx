// import React,{useEffect, useState} from "react";
// import Todo from "../todolis/Todo";
// function Todolist(){
//     var [todos,setTodos] = useState(['rohit','kohli']);
//     var [todo,setTodo] = useState('');

//     var handleInp =(e)=>{
//         setTodo(e.target.value);
//     }

//     var added =()=>{
//         setTodos([...todos,todo]);
//         ref1.current.value="";
//     }
     
//     var deltodo =React.useCallback((index)=>{
//         var temp = [...todos];
//         temp.splice(index,1);
//         setTodos([...temp]);
//     },[todos.length]);

//     var ref1 = React.useRef();
//     var ref2 = React.useRef();

//     var checkenter =(e)=>{
//         if(e.key==='Enter'){
//             ref2.current.focus();
//            //  added();
//         }
//     };
//     useEffect(()=>{
//         ref1.current.focus();
//     },[]);
//     return (
//         <div className='border border-4 m-2 p-2 border-warning'>
//             <h1>Todolist</h1>
//             <input type="text" ref={ref1} onChange={handleInp} onKeyUp={checkenter} className="border border-success rounded"/>
//             <button ref={ref2} onClick={added} className="btn btn-outline-success ms-2">Add task</button>
//             <ul>
//                 {
//                     todos.map((t,i)=>{
//                         return <Todo t={t} deltodo={deltodo} i={i}></Todo>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }  
// export default Todolist;
