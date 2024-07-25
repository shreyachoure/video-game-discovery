import { Flex, Grid, GridItem, Box, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	searchText: string;
	sortOrder: string;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<Grid
				templateAreas={{
					base: `"header" "main"`,
					lg: `"header header" "aside main"`,
				}}
			>
				<GridItem area={"header"}>
					<NavBar
						onSearch={(searchText) =>
							setGameQuery({ ...gameQuery, searchText })
						}
					/>
				</GridItem>
				<Show above="md">
					<GridItem area={"aside"}>
						<GenreList
							onSelectGenre={(genre) => {
								setGameQuery({ ...gameQuery, genre });
							}}
							selectedGenre={gameQuery.genre}
						/>
					</GridItem>
				</Show>
				<GridItem area={"main"}>
					<Box paddingLeft={2}>
						<GameHeading gameQuery={gameQuery} />
						<Flex marginBottom={5}>
							<Box marginRight={5}>
								<PlatformSelector
									onSelectPlatform={(platform) => {
										setGameQuery({ ...gameQuery, platform });
									}}
									selectedPlatform={gameQuery.platform}
								/>
							</Box>
							<SortSelector
								sortOrder={gameQuery.sortOrder}
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder })
								}
							/>
						</Flex>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
};

export default App;
