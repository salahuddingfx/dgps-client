import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isDrawerOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setSearchOpen: (state, action) => {
      state.isSearchOpen = action.payload;
    },
    setDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { toggleTheme, setMobileMenuOpen, toggleMobileMenu, setSearchOpen, setDrawerOpen } = uiSlice.actions;
export default uiSlice.reducer;
