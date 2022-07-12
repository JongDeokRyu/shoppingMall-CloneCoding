import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: { name: 'ryu ', age: 26 },
    reducers: {
        changeName(state) {
            state.name = 'park'
        },
        increase(state, action) {
            state.age += action.payload
        },
    }
})


export let { changeName, increase, increase2 } = user.actions
export default user