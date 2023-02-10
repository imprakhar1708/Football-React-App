import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const LiveChip = ({ league }) => {
	return (
		<Stack
			direction='row'
			spacing={1}
			sx={{
				position: "absolute",
				top: "10px",
				left: "10px",
			}}
		>
			<Chip
				label='LIVE'
				size='small'
				sx={{
					bgcolor: "#e72641",
					color: "#fff",
					fontFamily: "Poppins",
				}}
			/>
			<Chip
				label={league}
				sx={{ color: "#fff", fontFamily: "Poppins" }}
				size='small'
				variant='outlined'
			/>
		</Stack>
	);
};

export default LiveChip;
