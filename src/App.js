import Navbar from "./Components/Navbar";
import { Stack } from "@mui/material";
import SideBar from "./Components/SideBar";
import News from "./Components/News";
import Middle from "./Components/Middle";
import { useSelector } from "react-redux";
const App = () => {
	const isMenuOpen = useSelector((state) => state.menuReducer.menu);
	return (
		<>
			<Navbar />
			<Stack
				direction='row'
				sx={{
					padding: {
						xs: ".5rem",
						sm: "1.4rem",
					},
				}}
				justifyContent='space-between'
				flexWrap='wrap'
				gap={2}
			>
				<SideBar />
				<Middle />
				<News />
			</Stack>
		</>
	);
};

export default App;
