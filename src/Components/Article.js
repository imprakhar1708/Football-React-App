import { List, ListItemButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";

function Article({ title, img, date, url }) {
	return (
		<Stack
			className='glassInglass'
			sx={{
				borderRadius: "1em",
				justifyContent: "space-between",
				border: "1px solid rgba(255, 255, 255, 0.125)",
				marginBottom: "0.4em",
			}}
		>
			<List
				onClick={() => {
					window.open(url);
				}}
				sx={{
					width: "clamp(300px,400px,100%)",
					color: "white",
					overflow: "scroll",
					flexBasis: "1",
				}}
				disablePadding
				component='div'
				aria-labelledby='nested-list-subheader'
			>
				<ListItemButton sx={{ height: "100%" }}>
					<Stack
						direction='row'
						alignItems='center'
						spacing={1.5}
						width='clamp(100px,400px,95%)'
					>
						<img
							style={{
								flexBasis: "1",
								maxWidth: "40%",
								borderRadius: "5px",
							}}
							src={img}
							alt=''
						/>
						<div
							style={{
								display: "flex",
								gap: "5px",
								flexDirection: "column",
								flex: "1",
							}}
						>
							<Typography
								sx={{
									fontFamily: "Poppins",
									fontSize: ".9rem",
								}}
							>
								{title}
							</Typography>
							<Typography
								sx={{
									fontFamily: "Poppins",
									fontSize: ".7rem",
									color: "#959595",
								}}
							>
								{date}
							</Typography>
						</div>
					</Stack>
				</ListItemButton>
			</List>
		</Stack>
	);
}
export default Article;
