import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function BigNews() {
	const bigNews = useSelector((state) => state.newsReducer.bigNews);

	return (
		<Card
			onClick={() => {
				window.open(bigNews.url);
			}}
			sx={{
				cursor: "pointer",
				backdropFilter: "blur(25px) saturate(200%)",
				webkitBackdropFilter: "blur(25px) saturate(200%)",
				backgroundColor: "rgba(53, 53, 53, 0.8)",
				borderRadius: "8px",
				border: "1px solid rgba(255, 255, 255, 0.125)",
				width: "clamp(100px,400px,100%)",
				color: "#959595",
				boxShadow: "none",
				marginBlock: "0.8em",
			}}
		>
			<CardMedia
				component='img'
				image={bigNews.image}
				sx={{ borderRadius: "12px" }}
			/>
			<CardContent
				sx={{
					padding: "0 10px",
					marginTop: "1em",
				}}
			>
				<Typography
					variant='body2'
					color='text.secondary'
					sx={{
						fontSize: "1rem",
						fontFamily: "Poppins",
						lineHeight: "1.2",
						marginBottom: ".5em",
						color: "#f5f5f5",
					}}
				>
					{bigNews.title}
				</Typography>
				<Typography sx={{ fontSize: "0.7rem" }}>
					{bigNews.publishedAt}
				</Typography>
			</CardContent>
		</Card>
	);
}
