import { DELETEINTERVALO, INTERVALO, UPDATEINTERVALO } from "./actions"



const initialSate={
    intervalo:[1],
    zona:"",
}



export default function rootReducer(state=initialSate,actions){
    switch(actions.type){
        case INTERVALO:
         
            return{
                ...state,
                intervalo:[...state.intervalo,actions.payload]
            }
        case DELETEINTERVALO:
            return{
                ...state,
                intervalo:actions.payload.length>0?actions.payload:[1]
            } 
        case UPDATEINTERVALO:
           // console.log(actions.payload)
            return{
                ...state,
                intervalo:actions.payload
            }   
        default:
            return state
    }
}