import { createSlice } from "@reduxjs/toolkit";

export const ChatSlice=createSlice({
    name:"chat",
    initialState:{
        Message:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.Message.splice(20,1)
            state.Message.unshift(action.payload);
        },
        addNewMessage:(state,action)=>{
            state.Message.unshift(action.payload);
        }
    }
})

export const {addMessage,addNewMessage} =ChatSlice.actions;
export default ChatSlice.reducer;