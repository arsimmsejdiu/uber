import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setOrigin: (state, action) => {
      state.origin = action.payload; // we wantto change the origin to the payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload; // we want to change the destination to the payload
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload; // we want to change the travelTimeInformation to the payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export default navSlice.reducer;
