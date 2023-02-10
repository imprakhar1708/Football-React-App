import { Avatar } from "@mui/material";
import React from "react";

const FormChip = ({ ev }) => {
	const avatarColor = () => {
		if (ev == "W") return "lightGreen";
		if (ev == "L") return "#e72641";
		if (ev == "D") return "lightYellow";
	};
	const clr = avatarColor();
	return (
		<Avatar
			sx={{
				width: "25px",
				height: "25px",
				bgcolor: clr,
				color: "black",
				fontSize: "1rem",
				fontWeight: "700",
			}}
		>
			{ev}
		</Avatar>
	);
};

export default FormChip;
