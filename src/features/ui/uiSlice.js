import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen(state, action) {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    }
  }
});

export const { setMobileMenuOpen, toggleMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
