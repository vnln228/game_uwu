import { createSlice } from '@reduxjs/toolkit';

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
            state.players = state.players.filter(player => player.id === action.payload);
        },
        move(state, action){
            // state.players[action.payload].x+=1
            if (action.payload.move==='r') {
                state.players[action.payload.id].x+=1
            }
            if (action.payload.move==='l') {
                state.players[action.payload.id].x-=1
            }
            if (action.payload.move==='u') {
                state.players[action.payload.id].y-=1
            }
            if (action.payload.move==='d') {
                state.players[action.payload.id].y+=1
            }

        }
    },
});

export const {addPlayer, removePlayer, move} = playersSlice.actions;

export default playersSlice.reducer