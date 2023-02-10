import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { fetchData } from "../Redux/Slices/TopScorersSlice";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "rgba(53, 53, 53, 0.8)",
		color: "rgba(255, 255, 255, 0.75)",
		fontFamily: "Poppins",
		fontWeight: "700",
		fontSize: "1.5rem",
		paddingLeft: "2px",
	},
	[`&.${tableCellClasses.body}`]: {
		fontFamily: "Poppins",
		color: "rgba(255, 255, 255, 0.75)",
		fontSize: "1.3rem",
		fontWeight: "500",
	},
	[`&.${tableCellClasses.body}:first-child`]: {
		fontWeight: "700",
		fontSize: "1.5rem",
		color: "#e72641",
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:last-of-type td, &:last-of-type th": {
		border: 0,
	},
}));

export default function TopScorers() {
	let { id } = useParams();
	let location = useLocation();
	const tsa = useSelector((state) => state.topScorersReducer.topScArr);
	const status = useSelector((state) => state.topScorersReducer.status);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchData(id));
	}, [location]);
	const mhidden = {
		display: {
			xs: "none",
			lg: "table-cell",
			md: "table-cell",
		},
	};
	return (
		<TableContainer
			sx={{ height: "100%", overflowY: "scroll" }}
			className='glassInglass'
			component={Paper}
		>
			{status === "loading" ? (
				<Skeleton
					height='500px'
					width='900px'
					variant='rectangular'
					animation='wave'
				/>
			) : (
				<Table aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell
								align='center'
								sx={{ color: "#000" }}
							>
								Rank
							</StyledTableCell>
							<StyledTableCell align='center'>
								Top Scorers
							</StyledTableCell>
							<StyledTableCell
								sx={{
									display: {
										xs: "none",
										lg: "table-cell",
										md: "none",
									},
								}}
								align='center'
							>
								Club
							</StyledTableCell>
							<StyledTableCell sx={mhidden} align='center'>
								Matches
							</StyledTableCell>
							<StyledTableCell align='center'>
								Goals
							</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{tsa.map((e, i) => (
							<StyledTableRow key={e.player.id}>
								<StyledTableCell
									align='center'
									component='th'
									scope='row'
								>
									{i + 1}
								</StyledTableCell>
								<StyledTableCell align='left'>
									<Stack
										direction='row'
										gap={2}
										alignItems='center'
									>
										<Avatar src={e.player.photo} />
										{e.player.name}
									</Stack>
								</StyledTableCell>
								<StyledTableCell
									sx={{
										display: {
											xs: "none",
											lg: "table-cell",
											md: "none",
										},
									}}
									align='left'
								>
									<Stack
										direction='row'
										gap={2}
										alignItems='center'
									>
										<Avatar
											src={e.statistics[0].team.logo}
										/>

										{e.statistics[0].team.name}
									</Stack>
								</StyledTableCell>
								<StyledTableCell sx={mhidden} align='center'>
									{e.statistics[0].games.appearences}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{e.statistics[0].goals.total}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			)}
		</TableContainer>
	);
}
