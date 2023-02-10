import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Slices/liveScoreSlice";
import MUScorecard from "./MUScorecard";

const MiddleUp = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchData());
	}, []);
	const scores = useSelector((state) => state.liveScoreReducer.liveScoreArr);
	const loading = useSelector((state) => state.liveScoreReducer.status);

	const items = [];

	{
		scores.forEach((e) => {
			const obj = {
				team1: {
					image: "",
					goal: "",
				},
				team2: {
					image: "",
					goal: "",
				},
				time: "",
				live: "",
				league: "",
			};
			obj.team1.image = e.teams.home.logo;
			obj.team1.goal = e.goals.home;
			obj.team2.image = e.teams.away.logo;
			obj.team2.goal = e.goals.away;
			obj.live = e.fixture.status.short === "FT" ? false : true;
			obj.time =
				e.fixture.status.short === "FT"
					? "FT"
					: `${e.fixture.status.elapsed}'`;
			obj.league = e.league.name;
			items.push(obj);
		});
	}
	return (
		<Stack
			alignItems='center'
			justifyContent='center'
			sx={{
				borderRadius: "8px !important",
				flexBasis: "1",
			}}
		>
			<Carousel
				sx={{
					maxHeight: "200px",
					width: "100%",
					borderRadius: "8px !important",
				}}
				indicators={false}
			>
				{loading === "loading" ? (
					<MUScorecard />
				) : (
					items.map((e, i) => {
						return (
							<MUScorecard
								key={i}
								team1={e.team1}
								team2={e.team2}
								time={e.time}
								live={e.live}
								league={e.league}
							/>
						);
					})
				)}
			</Carousel>
		</Stack>
	);
};

export default MiddleUp;
