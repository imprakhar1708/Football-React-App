import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
	name: "newsSlice",
	initialState: {
		menu: false,
	},
	reducers: {
		toggleMenu: (state) => {
			state.menu = !state.menu;
		},
	},
});

export default menuSlice.reducer;

export const { toggleMenu } = menuSlice.actions;
