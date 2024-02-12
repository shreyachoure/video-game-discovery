import { HStack, Image, Text, Textarea } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
const NavBar = () => {
	return (
		<div>
			<HStack justifyContent={"space-between"} p={4}>
				<Image src={logo} alt="Logo" boxSize={"100px"} />

				<ColorSwitch />
			</HStack>
		</div>
	);
};

export default NavBar;
