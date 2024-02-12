import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"header" "main" "footer"`,
					lg: `"header header" "aside main" "aside footer"`,
				}}
			>
				<GridItem area={"header"}>
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem area={"aside"}>Aside</GridItem>
				</Show>
				<GridItem area={"main"}>Main</GridItem>
				<GridItem area={"footer"}>Footer</GridItem>
			</Grid>
		</>
	);
}

export default App;
