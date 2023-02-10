import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "8ea474ed8d5e143a9b74941ea336b09e");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
};

export const fetchData = createAsyncThunk("standings/fetch", async (id) => {
	const apiUrl = `https://enthusiastic-red-katydid.cyclic.app/standings/${id}`;
	const res = await fetch(apiUrl, requestOptions);
	return await res.json();
});

const standingsSlice = createSlice({
	name: "standingsSlice",
	initialState: {
		standingsArr: [],
		status: "loading",
	},
	extraReducers: function (builder) {
		builder
			.addCase(fetchData.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = "success";
				state.standingsArr =
					action.payload.response[0].league.standings[0];
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.status = "loading";
			});
	},
});

export default standingsSlice.reducer;
