let initialState = {
    list:[]
}


const TodoReducer=(state= initialState,action)=>{
switch(action.type){
    case "TO_ADD":{
    return {list : [...state.list,action.payload]} 
    }
    case "TO_DELETE" :{
        state.list.splice(action.payload,1)
        return {list : [...state.list]}
    }
    case "REMOVE_All":{
        return {list:[]}
    }
    case "UPDATE" :{
        state.list.splice(action.payload[0],1,action.payload[1])
        return {list : [...state.list]}
    }
    default : {
 return state;
    }
}
}
export default TodoReducer;