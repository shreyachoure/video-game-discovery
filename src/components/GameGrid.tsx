import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GridSkeleton from "./GridSkeleton";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	// const { games, error, isLoading } = useGames(selectedGenre, selectedPlatform);
	const { data: games, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<>
			<div className="gameContainer">
				{error && <Text color="red.500">{error}</Text>}

				<SimpleGrid
					// columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
					columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
					spacing={5}
					padding={4}
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
