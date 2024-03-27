import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appslice";


const appstore = configureStore({
   reducer:{
    app : appSlice,
   },
});
export default appstore ;