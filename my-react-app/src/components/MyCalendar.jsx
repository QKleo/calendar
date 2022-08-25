
import { useSelector } from "react-redux";
import "./MyCalendar.css"

export default function MyCalendar(props){
    let array=[]
    if(props.intervalo.length>1){
    array=props.intervalo
    array=array.slice(1)
    }

    return(
        <div>
            
            <div className="text">
               {array.length>0&&array.map((e,i)=>{
                return <li  key={i}>times:{e.desde}/{e.hasta} days: {e.dias.map((j,x)=>{return <span key={x}>{j.toUpperCase()}/</span> })}</li>
            
            })}
            </div>

        </div>
    )
}