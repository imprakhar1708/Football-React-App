import { Stack } from "@mui/material";
import React from "react";
import MiddleBttm from "./MiddleBttm";
import MiddleUp from "./MiddleUp";

const Middle = () => {
	return (
		<Stack
			sx={{
				flex: "1",
				maxHeight: "88vh",
				width: "clamp(100px,400px,100%)",
			}}
			gap={2}
		>
			<MiddleUp />

			<MiddleBttm />
		</Stack>
	);
};

export default Middle;
