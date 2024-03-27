import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
      togglemenu:(state)=>{
          state.isMenuOpen= !state.isMenuOpen
      },
    },
})
export const{togglemenu} = appslice.actions;
export default appslice.reducer; 