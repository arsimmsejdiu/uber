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
