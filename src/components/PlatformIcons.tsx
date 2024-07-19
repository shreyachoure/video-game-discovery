// Icons mapping
import {
	FaWindows,
	FaPlaystation,
	FaLinux,
	FaXbox,
	FaApple,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
	platforms: Platform[];
}
const PlatformIcons = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		linux: FaLinux,
		xbox: FaXbox,
		mac: FaApple,
		android: FaAndroid,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
		web: BsGlobe,
	};
	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon
					key={platform.id}
					as={iconMap[platform.slug]}
					color="grey.500"
				></Icon>
			))}
		</HStack>
	);
};

export default PlatformIcons;
