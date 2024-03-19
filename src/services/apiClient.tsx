import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "c144575df0cd45c0abb3f07eb892249d",
	},
});
