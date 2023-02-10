import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { fetchData } from "../Redux/Slices/StandingsSlice";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import FormChip from "./FormAvatar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "rgba(53, 53, 53, 0.8)",
		color: "rgba(255, 255, 255, 0.75)",
		fontFamily: "Poppins",
		fontWeight: "700",
		fontSize: "1.4rem",
		paddingInline: "5px",
		paddingBottom: "22px",
		paddingTop: "12px",
	},
	[`&.${tableCellClasses.body}`]: {
		fontFamily: "Poppins",
		color: "rgba(255, 255, 255, 0.75)",
		fontSize: "1.3rem",
		fontWeight: "500",
		padding: "5px",
		paddingBlock: "6px",
	},
	[`&.${tableCellClasses.body}:first-child`]: {
		padding: "0",
		fontWeight: "700",
		fontSize: "1.5rem",
		color: "#e72641",
	},
	[`&.${tableCellClasses.body}:last-child`]: {
		padding: "12px",
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:last-of-type td, &:last-of-type th": {
		border: 0,
	},
}));

export default function Standings() {
	let { id } = useParams();
	let location = useLocation();
	const tsa = useSelector((state) => state.standingsReducer.standingsArr);
	const status = useSelector((state) => state.standingsReducer.status);
	const dispatch = useDispatch();
	const teamId = id === undefined ? 39 : id;
	React.useEffect(() => {
		dispatch(fetchData(teamId));
	}, [location]);
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
								<span className='red'>R</span>ank
							</StyledTableCell>
							<StyledTableCell align='center'>
								<span className='red'>T</span>
								eams
							</StyledTableCell>
							<StyledTableCell align='center'>
								<span className='red'>T</span>otal
							</StyledTableCell>
							<StyledTableCell align='center'>
								<span className='red'>W</span>ins
							</StyledTableCell>
							<StyledTableCell align='center'>
								<span className='red'>D</span>raw
							</StyledTableCell>
							<StyledTableCell align='center'>
								<span className='red'>L</span>ose
							</StyledTableCell>
							<StyledTableCell align='center'>
								<span className='red'>P</span>oints
							</StyledTableCell>
							<StyledTableCell align='center'>
								<span className='red'>L</span>ast 5
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tsa.map((e, i) => (
							<StyledTableRow key={e.rank}>
								<StyledTableCell
									align='center'
									component='th'
									scope='row'
								>
									{e.rank}
								</StyledTableCell>
								<StyledTableCell align='left'>
									<Stack
										direction='row'
										gap={2}
										alignItems='center'
										paddingLeft='20px'
									>
										<Avatar src={e.team.logo} />
										{e.team.name}
									</Stack>
								</StyledTableCell>
								<StyledTableCell align='center'>
									{e.all.played}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{e.all.win}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{e.all.draw}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{e.all.lose}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{e.points}
								</StyledTableCell>
								<StyledTableCell align='center'>
									<Stack direction='row' spacing={0.5}>
										{Array.from(e.form).map((ev, i) => (
											<FormChip ev={ev} />
										))}
									</Stack>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			)}
		</TableContainer>
	);
}
