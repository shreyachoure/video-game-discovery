// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";
export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

// const useGenre = () => useData<Genre>('/genres')

// export default useGenre

const useGenre = () => {
	// const fetchGenres = () => {
	// 	return apiClient.get<Genre []>("/genres").then((res) => res.data);
	// };
	const {
		data: genres,
		error,
		isPending,
	} = useQuery({
		queryKey: ["genres"],
		queryFn: () =>
			apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
	});

	return { genres, error, isPending };
};

export default useGenre;
