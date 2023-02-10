import { Stack } from "@mui/system";
import Article from "./Article";
import { useSelector } from "react-redux";

const NewsContainer = () => {
	const news = useSelector((state) => state.newsReducer.newsArr);
	return (
		<Stack flex={1} sx={{ overflowY: "scroll", overflowX: "hidden" }}>
			{news.map((e, i) => {
				return (
					<Article
						key={i}
						title={e.title}
						img={e.image}
						date={e.publishedAt}
						url={e.url}
					/>
				);
			})}
		</Stack>
	);
};

export default NewsContainer;
