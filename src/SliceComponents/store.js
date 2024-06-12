import { configureStore } from '@reduxjs/toolkit'
import {SideBarSlice} from "./Side_slice"
import {ChatSlice} from "./ChatSlice"
export const store = configureStore({
  reducer: {
    sideBar:SideBarSlice.reducer,
    chat:ChatSlice.reducer,
  },
})