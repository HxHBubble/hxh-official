import { configureStore } from "@reduxjs/toolkit";
import registeredTeamsSlice from "./RegisterTeam";

const store = configureStore({
    reducer:{
        registeredTeams : registeredTeamsSlice.reducer,
    }
})

export default store;