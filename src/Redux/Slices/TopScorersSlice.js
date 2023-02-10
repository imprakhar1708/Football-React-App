import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

var myHeaders = new Headers()
myHeaders.append("x-rapidapi-key", "8ea474ed8d5e143a9b74941ea336b09e")
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io")

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
}

export const fetchData = createAsyncThunk("topScorers/fetch", async (id) => {
	const apiUrl = `https://helpful-jodhpurs-frog.cyclic.app/topsc/${id}`
	const res = await fetch(apiUrl, requestOptions)
	return await res.json()
})

const topScorersSlice = createSlice({
	name: "topScorersSlice",
	initialState: {
		topScArr: [],
		status: "loading",
	},
	extraReducers: function (builder) {
		builder
			.addCase(fetchData.pending, (state, action) => {
				state.status = "loading"
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = "success"
				state.topScArr = action.payload.response
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.status = "loading"
			})
	},
})

export default topScorersSlice.reducer
