import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getGames = createAsyncThunk("game/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/game/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addGames = createAsyncThunk("game/add", async (game) => {
  try {
    let result = await axios.post("http://localhost:5000/game/add", game);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteGames = createAsyncThunk("game/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/game/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const updateGames = createAsyncThunk(
  "game/update",
  async ({ id, game }) => {
    try {
      let result = await axios.put(`http://localhost:5000/game/${id}`, game);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  game: null,
  status: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: {
    [getGames.pending]: (state) => {
      state.status = "pending";
    },

    [getGames.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.game = action.payload.data?.games;
    },
    [getGames.rejected]: (state) => {
      state.status = "rejected";
    },
    [addGames.pending]: (state) => {
      state.status = "pending";
    },

    [addGames.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [addGames.rejected]: (state) => {
      state.status = "rejected";
    },
    [deleteGames.pending]: (state) => {
      state.status = "pending";
    },

    [deleteGames.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [deleteGames.rejected]: (state) => {
      state.status = "rejected";
    },
    [updateGames.pending]: (state) => {
      state.status = "pending";
    },

    [updateGames.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [updateGames.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
//export const {  } = gameSlice.actions

export default gameSlice.reducer;
