import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
	return (
		<div>
			<HStack p={4}>
				<Image src={logo} alt="Logo" boxSize={"100px"} />
				{/* <SearchInput /> */}
				<ColorSwitch />
			</HStack>
		</div>
	);
};

export default NavBar;
