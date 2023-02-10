import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../Slices/newsSlice";
import menuReducer from "../Slices/menuSlice";
import liveScoreReducer from "../Slices/liveScoreSlice";
import topScorersReducer from "../Slices/TopScorersSlice";
import standingsReducer from "../Slices/StandingsSlice";

export default configureStore({
	reducer: {
		newsReducer,
		menuReducer,
		liveScoreReducer,
		topScorersReducer,
		standingsReducer,
	},
});
