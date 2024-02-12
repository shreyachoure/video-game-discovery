import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => {
	return (
		<div>
			<HStack>
				<Image src={logo} alt="Logo" boxSize={"100px"} />
				<Text>Game-Hub</Text>
			</HStack>
		</div>
	);
};

export default NavBar;
