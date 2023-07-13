export const NEW= (item)=>{
    return{
        type:"NEW_DATA",
        payload: item
    }
}
export const ADD= (item)=>{
    return{
        type:"ADD_CART",
        payload: item
    }
}
export const DETAIL= (item)=>{
    return{
        type:"DETAIL_VIEW",
        payload: item
    }
}
