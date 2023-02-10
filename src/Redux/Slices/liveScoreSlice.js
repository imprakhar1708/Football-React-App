import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("liveScore/fetch", async () => {
	const apiUrl1 = `https://tame-worm-school-uniform.cyclic.app/livescores`;
	const res1 = await fetch(apiUrl1);
	const r1 = await res1.json();
	return r1;
});

const liveScoreSlice = createSlice({
	name: "liveScoreSlice",
	initialState: {
		liveScoreArr: [],
		status: "loading",
	},
	extraReducers: function (builder) {
		builder
			.addCase(fetchData.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = "success";
				const f1 = action.payload[0].response;
				const f2 = action.payload[1].response;
				state.liveScoreArr = [...f1, ...f2];
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.status = "loading";
				console.log(action.error.message);
			});
	},
});

export default liveScoreSlice.reducer;
