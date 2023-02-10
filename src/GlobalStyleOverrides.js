import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default function GlobalStyleOverrides() {
	const theme = createTheme({
		typography: {
			fontFamily: [
				'"Bebas Neue"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
			].join(","),
			body1: {
				fontFamily: "'Poppins', Arial, sans-serif",
			},
		},
		components: {
			MuiButton: {
				variants: [
					{
						props: { variant: "contained" },
						style: {
							textTransform: "none",
							border: `10px dashed red`,
						},
					},
				],
			},
		},
	});

	return responsiveFontSizes(theme);
}
