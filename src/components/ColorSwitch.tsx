import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<HStack>
				<Switch
					isChecked={colorMode === "dark"}
					colorScheme="green"
					onChange={toggleColorMode}
				></Switch>
				<Text>Dark Mode</Text>
			</HStack>
		</>
	);
};

export default ColorSwitch;
