import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { ToAdd, ToDelete, RemoveAll, Update } from './Action/Action';

import STYLE from './todo.module.css'
const Todo = () => {
    let [todoAdd,setTodoAdd]=useState("")
    const[isUpdate,setIsUpdate]=useState(true)
    
    let Dispatch=useDispatch()
   let listData =  useSelector((state)=>state.list);
   
      let update=(index)=>{
        return index;   
      }
       
   
  return (
    <div className={STYLE.main1} >
      <div className={STYLE.box1}>
        <h3 style={{color:'red'}}>AddList</h3><input type="text" className={STYLE.main} placeholder='add todo' onChange={(e)=>setTodoAdd(e.target.value)}/>
       {isUpdate ? <button onClick={()=>{Dispatch(ToAdd(todoAdd))}}>TodoAdd</button> : <button onClick={()=>{Dispatch(Update(update(),todoAdd))
        setIsUpdate(true)
      }}>update</button> }
        
        <button onClick={()=>{Dispatch(RemoveAll())}}>ClearAll</button>
         </div>
         <div className={STYLE.box2}>
        {listData.map((x,index)=>{
      return <div key={index}>
        <li className={STYLE.lis}>{x}</li><button onClick={()=>{Dispatch(ToDelete(index))}}>delete</button>
      <button onClick={()=>{
         setIsUpdate(false)
         update(index)
         Dispatch(Update(index,todoAdd))
      }}>Update</button>
      </div>
        })}
        </div>
    </div>
  )
}

export default Todo