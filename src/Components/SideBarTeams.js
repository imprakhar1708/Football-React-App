import { Avatar, Skeleton, Stack } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import "../App.css";

function SideBarTeams() {
	var items = [
		[
			"https://media-1.api-sports.io/football/teams/50.png",
			"https://media-1.api-sports.io/football/teams/40.png",
			"https://media-1.api-sports.io/football/teams/33.png",
		],
		[
			"https://media-1.api-sports.io/football/teams/42.png",
			"https://media-1.api-sports.io/football/teams/49.png",
			"https://media-1.api-sports.io/football/teams/529.png",
		],
		[
			"https://media-1.api-sports.io/football/teams/530.png",
			"https://media-1.api-sports.io/football/teams/541.png",
			"https://media-1.api-sports.io/football/teams/85.png",
		],
		[
			"https://media-1.api-sports.io/football/teams/47.png",
			"https://media-1.api-sports.io/football/teams/34.png",
			"https://media-1.api-sports.io/football/teams/157.png",
		],
	];

	const loading = useSelector((state) => state.newsReducer.status);
	return (
		<Stack direction='column'>
			<Carousel className='bttmBar' indicators={false} swipe={true}>
				{items.map((item, i) => (
					<Item key={i} item={item} loading={loading} />
				))}
			</Carousel>
		</Stack>
	);
}

function Item({ item, loading }) {
	return (
		<Stack
			direction='row'
			justifyContent='space-around'
			sx={{ opacity: "0.7" }}
			className='glassInglass'
			p={2}
		>
			{item.map((e, i) => {
				return loading === "loading" ? (
					<Skeleton
						animation='wave'
						variant='circular'
						width={75}
						height={75}
					/>
				) : (
					<div key={i}>
						<Avatar
							sx={{ width: "75px", height: "75px" }}
							alt='Remy Sharp'
							src={e}
							key={i}
						/>
					</div>
				);
			})}
		</Stack>
	);
}

export default SideBarTeams;
