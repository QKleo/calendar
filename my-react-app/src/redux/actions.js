
export const INTERVALO='INTERVALO';
export const DELETEINTERVALO="DELETEINTERVALO"
export const UPDATEINTERVALO="UPDATEINTERVALO"

export function setIntervalo(value){

    return(dispatch)=>{
        return dispatch({
            type:INTERVALO,
            payload:value
         })
    }
}
export function deletedintervalo(value,array){
    let nuevo=array.filter(e=>{return e.index!==value})
    return(dispatch)=>{
        return dispatch({
            type:DELETEINTERVALO,
            payload:nuevo
        })
    }
}
export function updateintervalo(obj,array){
    let nuevoArray=array.filter(e=>{return e.index!==obj.index})
    
    
    
    return(dispatch)=>{
        return dispatch({
            type:UPDATEINTERVALO,
            payload:[...nuevoArray,obj]
        })
    }
}