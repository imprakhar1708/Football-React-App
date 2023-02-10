const defaultImage = [
	"https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1605135693932-f1d6fb1be3cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

export default function defautImg() {
	return defaultImage[Math.floor(defaultImage.length * Math.random())];
}
