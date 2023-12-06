import { createSlice } from "@reduxjs/toolkit";

const textSlice=createSlice({
    name:"text",
    initialState:{
        text:""
    },
    reducers:{
        textChange:(state,action)=>{
            state.text=action.payload
        }
    }
})
export const {textChange} =textSlice.actions    
export default textSlice.reducer 