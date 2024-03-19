import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);
	return (
		<>
			<Grid
				templateAreas={{
					base: `"header" "main"`,
					lg: `"header header" "aside main"`,
				}}
			>
				<GridItem area={"header"}>
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem area={"aside"}>
						<GenreList
							onSelectGenre={(genre) => {
								setSelectedGenre(genre);
							}}
							selectedGenre={selectedGenre}
						/>
					</GridItem>
				</Show>
				<GridItem area={"main"}>
					<PlatformSelector
						onSelectPlatform={(platform) => {
							setSelectedPlatform(platform);
						}}
						selectedPlatform={selectedPlatform}
					/>
					<GameGrid selectedGenre={selectedGenre} />
				</GridItem>
			</Grid>
		</>
	);
};

export default App;
