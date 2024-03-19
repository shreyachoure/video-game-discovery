import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { platforms } = usePlatforms();

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BiChevronDown />}>
				Platforms
			</MenuButton>
			<MenuList>
				{platforms.map((platform) => (
					<MenuItem
						onClick={() => {
							onSelectPlatform(platform);
						}}
						key={platform.id}
						fontWeight={platform.id === selectedPlatform?.id ? "bold" : "normal"}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
