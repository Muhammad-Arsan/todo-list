import React,{useState} from 'react';
import ToDo from './ToDo';
import './App.css';

function App() {
   const [list , setList] = useState("");
   const [item , addItems] = useState([]);

   const inputEvent = (event)=>{
      setList(event.target.value);
   }
   const showList = ()=>{
   addItems((oldItems)=>{
      return[...oldItems , list]
   })
   setList('');
   }
   const deleteItem =(id)=>{
      addItems((oldItems)=>{
      return oldItems.filter((arrEle, index)=>
      {
         return index !== id;
      })
      })
   }
  return (
  <div className = "main_div">
     <div className = "inner_div">
        <br/>
        <h1>ToDoList</h1>
        <br/>
        <br/>
       <div className = "input_button">       
       <input 
        type = "text"
        placeholder = "Add a item"
        value = {list}
        onChange={inputEvent}
        

        />
        <button onClick = {showList}> + </button>
        </div>
        <ol>
           {item.map((itemVal , index)=>{
           return <ToDo 
           text = {itemVal}
           key = {index}
           id = {index}
           onSelect = {deleteItem} 
           /> 
           })}
         
       </ol>
     </div> 
  </div> 
      );
}

export default App;
