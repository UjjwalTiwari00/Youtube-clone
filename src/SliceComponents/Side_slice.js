import {createSlice} from '@reduxjs/toolkit'

const intiState={
    values:true,
    name:'',
}

export const SideBarSlice=createSlice({
    name:"sideBar",
    initialState:intiState,
    reducers:{
        slide:(state)=>{
            state.values=!state.values
        },
        Slideoff:(state)=>{
            state.values=false;
        },
        SetName:(state,action)=>{
            state.name=action.payload;
        }
    }
})

export const {slide,Slideoff,SetName} = SideBarSlice.actions
export default SideBarSlice.reducer