import { Button, Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}
const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date Added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average Rating" },
	];
	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BiChevronDown />}>
				Order by: {currentSortOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
