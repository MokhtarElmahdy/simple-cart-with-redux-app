import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cartSlice',
    initialState : [
        // {
        //     id: 1,
        //     qty: 1,
        //     price: 20
        // }
    ],
    reducers : {
        getCartItems: (state) => {
            // console.log(state);
            // console.log(action.payload);
            return state
        },
        addToCart: (state,action) => {
            // console.log(state);
            // console.log(action.payload);
            
            const finded = state.find((product => product.id === action.payload.id))
            if(finded){
                finded.qty +=1;
                finded.tPrice = finded.price * finded.qty;
                // return [...state , {...action.payload , qty: qty+1}]
                // const index = state.indexOf(finded)
                // state[index] = {...state[index] , qty: state[index].qty +1}
                // console.log(state[index].qty);
                // return state

            }else{
                // let qty = 1;
                // return [...state , {...action.payload , qty: 1}]
                state.push({...action.payload , qty: 1 , tPrice : action.payload.price})
            }
        },
        increaseQty : (state , action) => {
            const finded = state.find(product => product.id === action.payload)
            const index = state.indexOf(finded)
            state[index].qty +=1;
            state[index].tPrice = state[index].price * state[index].qty;
            return state
        },
        decreaseQty : (state , action) => {
            const finded = state.find(product => product.id === action.payload)
            const index = state.indexOf(finded)
            if(state[index].qty > 0){
                state[index].qty -=1;
            }else{
                state[index].qty =0;
            }
            state[index].tPrice = state[index].price * state[index].qty;
            return state
            
        },
        deleteFromCart: (state,action) => {
            console.log(action.payload);
             return state.filter(item => item.id !== action.payload)
        },
        clear: (state,action) => {
            return []
        },
    }
})
export const {addToCart,increaseQty,decreaseQty,deleteFromCart,clear} = cartSlice.actions;
export default cartSlice.reducer;