import { createSlice } from '@reduxjs/toolkit';
// import { uuid } from 'uuidv4';

export let initialState = {
  players:[]
}

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer(state, action) {
            state.players.push(action.payload);
        },
        removePlayer(state, action) {
            state.players = state.players.filter(player => player.id !== action.payload.id);
        },
        incrementPlayerX(state, action){
            state.players[state.players.find(player => player.id === action.payload).id].x+=1
        }
    },
});

export const {addPlayer, removePlayer, incrementPlayerX} = playersSlice.actions;

export default playersSlice.reducer