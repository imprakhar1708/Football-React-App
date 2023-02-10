import React from "react";
import { Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import SideBarBttm from "./SideBarBttm";
import "../App.css";
import SideBarTeams from "./SideBarTeams";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
	const leagues = [
		{
			id: "39",
			name: "Premier League",
			logo: "https://i.pinimg.com/originals/36/09/aa/3609aa05384b66c57c0417044228d8f6.jpg",
		},
		{
			id: "78",
			name: "Bundesliga",
			logo: "https://www.liblogo.com/img-logo/bu1117pa0b-bundesliga-logo-pin-by-mohamed-mohe-on-menteseim-bundesliga-logo-soccer-logo.png",
		},
		{
			id: "140",
			name: "Laliga",
			logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/38/37/cd/3837cdc5-8823-986a-8bec-d731720addc1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png",
		},
	];

	const [open, setOpen] = React.useState({});

	const handleClick = (id) => {
		setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
	};

	const isMenuOpen = useSelector((state) => state.menuReducer.menu);

	return (
		<div className={isMenuOpen ? "display-none" : "display-block"}>
			<Stack
				className='sideBar glass'
				sx={{
					borderRadius: "1em",
					height: "88vh",
					justifyContent: "space-between",
					position: "relative",
					border: "1px solid rgba(255, 255, 255, 0.125)",
				}}
			>
				<div
					style={{
						marginBottom: "1em",
						fontWeight: "700",
						fontSize: "1.5em",
						textAlign: "center",
						marginBlock: "0.5em",
					}}
				>
					<span className='red'>Major</span> Leagues
				</div>
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						color: "white",
						overflow: "scroll",
						flexBasis: "4",
					}}
					disablePadding
					component='div'
					aria-labelledby='nested-list-subheader'
				>
					{leagues.map((e) => {
						return (
							<div key={e.id}>
								<ListItemButton
									onClick={() => handleClick(e.id)}
								>
									<Stack
										className='glassInglass'
										direction='row'
										p={2}
										alignItems='center'
										spacing={1.5}
										width='100%'
									>
										<Avatar
											sx={{
												width: "40px",
												height: "40px",
											}}
											src={e.logo}
										/>
										<ListItemText primary={e.name} />
										{open[e.id] ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)}
									</Stack>
								</ListItemButton>
								<Collapse
									in={open[e.id]}
									timeout='auto'
									unmountOnExit
								>
									<List
										component='div'
										sx={{ marginTop: "-.5em" }}
									>
										<Link
											style={{
												textDecoration: "none",
												color: "white",
											}}
											to={`/topscorers/${e.id}`}
										>
											<ListItemButton
												sx={{ marginLeft: "1em" }}
											>
												<Stack
													direction='row'
													spacing={0.5}
												>
													<QueryStatsRoundedIcon fontSize='medium' />
													<ListItemText primary='Top Scorers' />
												</Stack>
											</ListItemButton>
										</Link>
										<Link
											style={{
												textDecoration: "none",
												color: "white",
											}}
											to={`/standings/${e.id}`}
										>
											<ListItemButton
												sx={{ marginLeft: "1em" }}
											>
												<Stack
													direction='row'
													spacing={0.5}
												>
													<SportsSoccerRoundedIcon fontSize='medium' />
													<ListItemText primary='Standings' />
												</Stack>
											</ListItemButton>
										</Link>
									</List>
								</Collapse>
							</div>
						);
					})}
					<div key='2'>
						<ListItemButton onClick={() => handleClick(2)}>
							<Stack
								className='glassInglass'
								direction='row'
								p={2}
								alignItems='center'
								spacing={1.5}
								width='100%'
							>
								<Avatar
									sx={{
										width: "40px",
										height: "40px",
									}}
									src='https://i.pinimg.com/474x/9c/b7/6e/9cb76e9c7d4e820239cabae27b7a2c9e.jpg'
								/>
								<ListItemText primary='Champions League' />
								{open[2] ? <ExpandLess /> : <ExpandMore />}
							</Stack>
						</ListItemButton>
						<Collapse in={open[2]} timeout='auto' unmountOnExit>
							<List component='div' sx={{ marginTop: "-.5em" }}>
								<Link
									style={{
										textDecoration: "none",
										color: "white",
									}}
									to={`/topscorers/2`}
								>
									<ListItemButton sx={{ marginLeft: "1em" }}>
										<Stack direction='row' spacing={0.5}>
											<QueryStatsRoundedIcon fontSize='medium' />
											<ListItemText primary='Top Scorers' />
										</Stack>
									</ListItemButton>
								</Link>
							</List>
						</Collapse>
					</div>
				</List>
				<div
					style={{
						fontWeight: "700",
						fontSize: "1.5em",
						textAlign: "center",
						color: "white",
					}}
				>
					<span className='red'>Top </span>Performers
				</div>
				<SideBarBttm />
				<div
					style={{
						marginTop: ".6em",
						fontWeight: "700",
						fontSize: "1.5em",
						textAlign: "center",
						color: "white",
					}}
				>
					<span className='red'>Elite </span>Clubs
				</div>
				<SideBarTeams />
			</Stack>
		</div>
	);
};

export default SideBar;
