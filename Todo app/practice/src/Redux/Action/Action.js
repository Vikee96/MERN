
export const ToAdd=(data)=>{
    return{
        type:"TO_ADD",
        payload:data
    }
}
export const ToDelete=(index)=>{
return{
    type:"TO_DELETE",
    payload:index
}
}
export const RemoveAll=()=>{
    return{
        type:"REMOVE_All"
    }
}
export const Update=(index,data)=>{
return{
    type:"UPDATE",
    payload:[index,data]
}
}