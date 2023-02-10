import { Skeleton, Stack } from "@mui/material";
import { useEffect } from "react";
import { fetchData } from "../Redux/Slices/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import BigNews from "./BigNews";
import NewsContainer from "./NewsContainer";

const News = () => {
	const status = useSelector((state) => state.newsReducer.status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, []);

	return (
		<Stack
			className='glass'
			sx={{
				borderRadius: "1em",
				position: "relative",
				border: "1px solid rgba(255, 255, 255, 0.125)",
				maxHeight: "88vh",
				width: "clamp(100px,400px,100%)",
				padding: "1em",
				opacity: "0.9",
			}}
		>
			<div sx={{ flexBasis: "1" }}>
				<span className='red'>Trending</span>{" "}
				<span style={{ fontSize: "1.7rem", fontWeight: "700" }}>
					News 🔥
				</span>
			</div>
			{status === "loading" ? (
				<Skeleton
					animation='wave'
					variant='rectangular'
					width={400}
					height={250}
					sx={{ marginBlock: "10px" }}
				/>
			) : (
				<BigNews />
			)}
			{status === "loading" ? (
				<Stack gap={2}>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width={400}
						height={100}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width={400}
						height={100}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width={400}
						height={100}
					/>
				</Stack>
			) : (
				<NewsContainer />
			)}
		</Stack>
	);
};

export default News;
