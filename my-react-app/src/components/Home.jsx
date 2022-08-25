import { useState ,useEffect} from "react"
import Selector from "./Selector"
import { useDispatch, useSelector } from "react-redux"
import MyCalendar from "./MyCalendar"
import "./Home.css"

export default function Home(){
    //const dispatch=useDispatch()
    const dias=["Sun","Mon","Tues","Wed","Thrus","Fri","Sat"]
    
    const intervalo=useSelector(state=>state.intervalo)

    const[local,setlocal]=useState({
        
        hora:"",
        zona:"",
        dia:""
      
    })
    
    useEffect(()=>{calculo()},[])
   

    function calculo(){
    let date=new Date()
     setlocal({...local,["hora"]:date.getHours(),["zona"]:date.getTimezoneOffset()/60,["dia"]:dias[date.getDay()]})
    
    }
   

   
   

    return(
        <div id="wrapper">
            <div>
                hora:{local.hora}--
                zona:{local.zona}--
                dia:{local.dia}--
                ref:{local.hora+local.zona}
            </div>
            {intervalo.length>0&&intervalo.map((e,i)=>{return ( <div key={i+2}>
                                            <Selector key={i} index={i} intervalo={intervalo}/> 
                                        </div>
                )
              
                })}

            <div>
                <button>send time availability</button>
            </div>
            
           <MyCalendar intervalo={intervalo}/>
           
        </div>

    )
}