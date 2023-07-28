import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
const API_URL_TEAMS = "http://localhost:4000/teams";

export const createNewTeamAsync = (data) => async (dispatch) => {
    try {
      // console.log(data);
      dispatch(registeredTeamsAction.setNotify({message:"Somthing Went Wrong Try Again Later", status: 500}))
      const response = await Axios.post(API_URL_TEAMS, data);
      dispatch(registeredTeamsAction.createNewTeam(response.data));
    } catch (err) {
      throw new Error(err);
    }
  };

const initialState = {
    teamData: {
        teamName: '',
        discordId: '',
        player1: '',
        player2: '',
        player3: '',
        player4: '',
        player5: '',
        teamRank: '',
    },
    notifyData:null,
    teamsData:{
        teams:{},
        message:'',
        loading:'false',
        error:'false'
    }
}


const registeredTeamsSlice = createSlice({
    name: 'Teams',
    initialState,
    reducers: {
        setTeamName: (state, actions) => {
            state.teamData.teamName = actions.payload;
        },
        setDiscordId: (state, actions) => {
            state.teamData.discordId = actions.payload;
        },
        setPlayer1: (state, actions) => {
            state.teamData.player1 = actions.payload;
        },
        setPlayer2: (state, actions) => {
            state.teamData.player2 = actions.payload;
        },
        setPlayer3: (state, actions) => {
            state.teamData.player3 = actions.payload;
        },
        setPlayer4: (state, actions) => {
            state.teamData.player4 = actions.payload;
        },
        setPlayer5: (state, actions) => {
            state.teamData.player5 = actions.payload;
        },
        setTeamRank: (state, actions) => {
            state.teamData.teamRank = actions.payload;
        },
        setNotify:(state, actions)=>{
            state.notifyData = actions.payload;
        },
        resetNotify:(state, actions)=>{
            state.notifyData = actions.payload;;
        },
        createNewTeam:(state,actions) =>{
            state.notifyData = actions.payload;

            state.teamData.teamName = '';
            state.teamData.discordId = '';
            state.teamData.player1 = '';
            state.teamData.player2 = '';
            state.teamData.player3 = '';
            state.teamData.player4 = '';
            state.teamData.player5 = '';
            state.teamData.teamRank = '';

        }
    },
    extraReducers: {
        [createNewTeamAsync.pending]: (state,) =>{
            state.teamsData.loading =true;
        },
        [createNewTeamAsync.fullfilled]: (state,{payload}) =>{
            state.teamsData.loading =false;
        },
        [createNewTeamAsync.rejected]: (state,) =>{
            state.teamsData.loading =false;
        }
    }
});



export const registeredTeamsAction = registeredTeamsSlice.actions;

export default registeredTeamsSlice;