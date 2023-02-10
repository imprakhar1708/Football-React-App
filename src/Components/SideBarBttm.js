import { Avatar, Skeleton, Stack } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import "../App.css";

function SideBarBttm() {
	var items = [
		[
			"https://media-1.api-sports.io/football/players/1100.png",
			"https://media-1.api-sports.io/football/players/935.png",
			"https://media-1.api-sports.io/football/players/184.png",
		],
		[
			"https://media-1.api-sports.io/football/players/2825.png",
			"https://media-1.api-sports.io/football/players/278.png",
			"https://media-1.api-sports.io/football/players/631.png",
		],
		[
			"https://media-1.api-sports.io/football/players/521.png",
			"https://media-1.api-sports.io/football/players/306.png",
			"https://media-1.api-sports.io/football/players/37127.png",
		],
		[
			"https://media-1.api-sports.io/football/players/302.png",
			"https://media-1.api-sports.io/football/players/18784.png",
			"https://media-1.api-sports.io/football/players/154.png",
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
							sx={{
								width: "75px",
								height: "75px",
							}}
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

export default SideBarBttm;
