import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { name: "", age: 0, email: "" }

export const userSlice = createSlice({
    name: "user", //name of the state
    initialState: { value: initialStateValue }, //starting value of the state
    reducers: {
        login: (state, action) => { //state holds info about the current and initial states
          state.value = action.payload 
        },
        
        logout: (state, action) => {
            state.value = initialStateValue
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer