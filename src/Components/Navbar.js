import React from "react";
import { Box } from "@mui/system";
import "../App.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { MenuRounded } from "@mui/icons-material";
import { toggleMenu } from "../Redux/Slices/menuSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
	const isMenuOpen = useSelector((state) => state.menuReducer.menu);
	const dispatch = useDispatch();
	return (
		<Box
			className='glass'
			sx={{
				width: "100%",
				borderBottom: "1px solid rgba(255, 255, 255, 0.125)",
				padding: ".3em",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<div
				className='m-hidden'
				style={{
					cursor: "pointer",
					marginBlock: "auto",
					marginLeft: "10px",
					position: "absolute",
					top: "1rem",
					left: ".5rem",
				}}
				onClick={() => {
					dispatch(toggleMenu());
				}}
			>
				{isMenuOpen ? (
					<MenuRounded sx={{ fontSize: "2em" }} />
				) : (
					<CloseRoundedIcon sx={{ fontSize: "2em" }} />
				)}
			</div>
			<span
				style={{
					fontSize: "2rem",
					color: "white",
					fontWeight: "700",
					marginInline: "auto",
				}}
			>
				Football
				<span className='red'>.</span>
			</span>
		</Box>
	);
};

export default Navbar;
