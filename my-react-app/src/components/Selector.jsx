import { useDispatch } from "react-redux"
import { useState } from "react"
import { setIntervalo,deletedintervalo,updateintervalo } from "../redux/actions"




export default function Selector(props){
    let id
    const[local,setlocal]=useState({
        desde:"",
        hasta:"",
        index:props.index,
        dias:[],
        control:[]
    })

    const dispatch=useDispatch()

    function handleonchange(e){

        const{name,value,id}=e.target
        name==="desde"&&setlocal({...local,["desde"]:value})
        name==="hasta"&&setlocal({...local,["hasta"]:value})
        if(name==="dias"){
            setlocal({...local,["dias"]:value==="all"?[value]:local.dias.includes("all")?[...local.dias.filter(e=>e!=="all"),value]:
            [...local.dias,value]})
           // console.log(id)
        }
        
    }

    function onclickadd(){
        if(local.desde!==""&&local.hasta!==""&&local.desde<local.hasta&&local.dias.length!==0&&!local.control.includes(local.index)){
            dispatch(setIntervalo(local))
            setlocal({...local,["control"]:[...local.control,local.index]})
           // console.log("add ",local.control)
        
        }
        else if(local.control.includes(local.index)&&local.desde!==""&&local.hasta!==""&&local.desde<local.hasta&&local.dias.length!==0){
            dispatch(updateintervalo(local,props.intervalo))
           //console.log("up",local.control)
        }
    }
    function onclickdeleted(){
        dispatch(deletedintervalo(local.index,props.intervalo))
        setlocal({...local,["hasta"]:"",["desde"]:"",["dias"]:[],["control"]:local.control.filter(e=>{return e!==local.index})})

    }
   
    
    return(
        <div>
             <label htmlFor="">desde:</label>
             <input type="time" onChange={(e)=>handleonchange(e)} name="desde"value={local.desde}/>
             <label htmlFor="">hasta:</label>
             <input type="time"onChange={(e)=>handleonchange(e)} name="hasta"value={local.hasta}/>

             <button onClick={()=>{onclickadd()}}>add</button>
             <button onClick={()=>{onclickdeleted()}}>del</button>
             <select name="dias" id={local.index} multiple={true}size={2} onChange={(e)=>handleonchange(e)}>
                <option value="all">Select all</option>
                <option value="sun">Sun</option>
                <option value="mon">Mon</option>
                <option value="tues">Tues</option>
                <option value="wes">Wes</option>
                <option value="thrus">Thrus</option>
                <option value="fri">Fri</option>
                <option value="sat">Sat</option>
             </select>
             
            
         </div>
    )
}