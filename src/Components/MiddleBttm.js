import { Chip, Stack } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Standings from "./Standings";
import TopScorers from "./TopScorers";

const MiddleBttm = () => {
	return (
		<Stack
			className='glass'
			sx={{
				border: "1px solid rgba(255, 255, 255, 0.125)",
				borderRadius: ".67em",
				flex: "4",
				overflowY: "scroll",
			}}
		>
			<Routes>
				<Route
					key='top_scorers'
					exact
					path='/topscorers/:id'
					element={<TopScorers />}
				/>
				<Route
					key='standings'
					exact
					path='/standings/:id'
					element={<Standings />}
				/>
				<Route key='standings' exact path='/' element={<Standings />} />
			</Routes>
		</Stack>
	);
};

export default MiddleBttm;
