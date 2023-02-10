import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Avatar, Chip, Skeleton } from "@mui/material"
import { Stack } from "@mui/system"
import LiveChip from "./LiveChip"
import { useSelector } from "react-redux"
import MuiAlert from "@mui/material/Alert"

function MUScorecard({ team1, team2, time, live, league }) {
	const loading = useSelector((state) => state.liveScoreReducer.status)
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
	})
	return (
		<Card
			className='glassInglass'
			sx={{
				maxHeight: "100%",
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "1.3em",
				paddingTop: "2.5em",
			}}
		>
			{live === true && loading !== "loading" ? (
				<LiveChip league={league} />
			) : loading === "loading" ? null : (
				<Chip
					label={league}
					size='small'
					variant='outlined'
					sx={{
						color: "#fff",
						position: "absolute",
						top: "10px",
						left: "10px",
						fontFamily: "Poppins",
					}}
				/>
			)}

			{loading === "loading" ? (
				<Skeleton
					variant='circular'
					animation='wave'
					height={100}
					width={100}
				/>
			) : (
				<CardMedia
					component='img'
					sx={{
						width: "100px",
						padding: "1rem",
						transform: {
							xs: "scale(1)",
							sm: "scale(1.3)",
							md: "scale(1.5)",
							lg: "scale(1.5)",
						},
					}}
					image={team1.image}
					alt='Live from space album cover'
				/>
			)}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<CardContent
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Stack direction='column' alignItems='center'>
						<Stack
							direction='row'
							spacing={2}
							alignItems='center'
							borderBottom='1px solid rgba(255, 255, 255, 0.125)'
						>
							{loading === "loading" ? (
								<Skeleton
									animation='wave'
									variant='rectangular'
									height={30}
									width={30}
								/>
							) : (
								<Avatar
									alt=''
									sx={{
										bgcolor: "transparent",
										width: "30px",
										height: "30px",
										color: "rgba(255, 255, 255, 0.75)",
										fontSize: "2em",
										fontFamily: "Poppins",
										fontWeight: "700",
									}}
								>
									{team1.goal}
								</Avatar>
							)}
							<div
								style={{
									color: "#e72641",
									fontSize: "1.5rem",
									fontFamily: "Poppins",
									fontWeight: "700",
								}}
							>
								:
							</div>
							{loading === "loading" ? (
								<Skeleton
									animation='wave'
									variant='rectangular'
									height={30}
									width={30}
								/>
							) : (
								<Avatar
									alt=''
									sx={{
										bgcolor: "transparent",
										width: "30px",
										height: "30px",
										color: "rgba(255, 255, 255, 0.75)",
										fontSize: "2rem",
										fontFamily: "Poppins",
										fontWeight: "700",
									}}
								>
									{team2.goal}
								</Avatar>
							)}
						</Stack>
						{loading === "loading" ? (
							<Skeleton
								animation='wave'
								width={37}
								height={37}
								variant='rectangular'
							/>
						) : (
							<Stack
								sx={{
									color: "rgba(255, 255, 255, 0.75)",
									fontFamily: "Poppins",
									fontWeight: "700",
								}}
							>
								<div
									style={{
										fontSize: "1.5rem",
									}}
								>
									{time}
								</div>
							</Stack>
						)}
					</Stack>
				</CardContent>
			</Box>
			{loading === "loading" ? (
				<Skeleton
					animation='wave'
					variant='circular'
					height={100}
					width={100}
				/>
			) : (
				<CardMedia
					component='img'
					sx={{
						width: "100px",
						padding: "1rem",
						transform: {
							xs: "scale(1)",
							sm: "scale(1.3)",
							md: "scale(1.5)",
							lg: "scale(1.5)",
						},
					}}
					image={team2.image}
					alt='Live from space album cover'
				/>
			)}
		</Card>
	)
}

export default MUScorecard
