import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


//parameter 넣을 때 payload 필수
//state 변경함수를 보통 action 이라고 한다.



let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 1, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        increaseCount(state, action) {
            state[action.payload].count++
        }
    }
})

export let { increaseCount } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
}) 