import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GridSkeleton from "./GridSkeleton";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatforms";

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const { games, error, isLoading } = useGames(selectedGenre, selectedPlatform);
	const skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<>
			<div className="gameContainer">
				{error && <Text color="red.500">{error}</Text>}

				<SimpleGrid
					columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
					padding={4}
					spacing={10}
				>
					{isLoading &&
						skeletons.map((skeleton) => <GridSkeleton key={skeleton} />)}
					{games.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</SimpleGrid>
			</div>
		</>
	);
};

export default GameGrid;
