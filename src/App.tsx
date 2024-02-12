import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"header" "main" "footer"`,
					lg: `"header header" "aside main" "aside footer"`,
				}}
			>
				<GridItem bg="orange.300" area={"header"}>
					Header
				</GridItem>
				<Show above="lg">
					<GridItem bg="pink.300" area={"aside"}>
						Aside
					</GridItem>
				</Show>
				<GridItem bg="green.300" area={"main"}>
					Main
				</GridItem>
				<GridItem bg="blue.300" area={"footer"}>
					Footer
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
