import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
	headers: {
		"Content-Type": "application/json",
	},
	body: {
		action: "getArticles",
		query: {
			$query: {
				$or: [
					{
						conceptUri:
							"https://en.wikipedia.org/wiki/Premier_League",
					},
					{
						conceptUri:
							"https://en.wikipedia.org/wiki/Champions_League",
					},
					{ conceptUri: "https://en.wikipedia.org/wiki/Laliga" },
					{ conceptUri: "https://en.wikipedia.org/wiki/Bundesliga" },
				],
			},
		},
		articlesPage: 1,
		articlesCount: 200,
		articlesSortBy: "date",
		articlesSortByAsc: false,
		articlesArticleBodyLen: -1,
		resultType: "articles",
		apiKey: "47dc3cb0-9ede-46ab-99dc-19e13ebaad4f",
	},
};

export const fetchData = createAsyncThunk("news/fetch", async () => {
	const apiUrl1 = `https://gnews.io/api/v4/search?q=premier%20league&token=580f311d929e2205bb1be520b9fff8ef`;
	const apiUrl2 = `https://gnews.io/api/v4/search?q=champions%20league&token=94730db6cedf4a18997aff6fa6a0c359`;
	const apiUrl3 = `https://gnews.io/api/v4/search?q=fifa&token=d6926a1a741a1e73fc62cb94afac2b13`;
	const apiUrl4 = `https://gnews.io/api/v4/search?q=laliga&token=6d7c0e367b627b91fc059e8a83aff0e0`;
	const res1 = await fetch(apiUrl1);
	const res2 = await fetch(apiUrl2);
	const res3 = await fetch(apiUrl3);
	const res4 = await fetch(apiUrl4);
	const r1 = await res1.json();
	const r2 = await res2.json();
	const r3 = await res3.json();
	const r4 = await res4.json();
	return [r1, r2, r3, r4];
});

const newsSlice = createSlice({
	name: "newsSlice",
	initialState: {
		newsArr: [],
		bigNews: {},
		status: "loading",
	},
	extraReducers: function (builder) {
		builder
			.addCase(fetchData.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = "success";
				const f1 = action.payload[0].articles;
				const f2 = action.payload[1].articles;
				const f3 = action.payload[2].articles;
				const f4 = action.payload[3].articles;
				state.bigNews = f1.shift();
				state.newsArr = [...f1, ...f2, ...f3, ...f4];
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.status = "loading";
			});
	},
});

export default newsSlice.reducer;
