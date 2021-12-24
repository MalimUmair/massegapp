export const groupReducer = (
    state= {product:[] ,cart:[], selectedproduct:[] , Add:[]},
    action             // key product:[assing value is empty value]// cart is a key:[assing value empty array],add is ake []
)=>{
    if (action.type ==="Add-Product") {
        return{...state , product:[...state.product ,...action.data]}
    }     
    if(action.type ==="Selected-Product") {
        return {...state , selectedproduct:[action.data]}
    }
    
     if(action.type ==="Add-Cart") {
         return{...state,cart:[{...action.data,key:state.cart.length},...state.cart],};  
     }  
     if (action.type ==="Remove-Product") {
        const filltered = state.cart.filter((item)=> item !== action.data);                
        return{ ...state, cart:filltered};
     }

     return state;

}

