import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Genre } from "./useGenre";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = (selectedGenre: Genre | null , selectedPlatform: Platform | null) => {

    const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		apiClient
			.get<FetchGamesResponse>(`/games`, {
				params: {
					genres: selectedGenre?.id,
					parent_platforms: selectedPlatform?.id
				}
			}, )
			.then((res) => {
				setGames(res.data.results);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setIsLoading(false);
			});
	}, [selectedGenre, selectedPlatform]);

    return  { games, error, isLoading, setGames, setError, setIsLoading };

}

export default useGames
