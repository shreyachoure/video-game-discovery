import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { Genre } from "../hooks/useGenre";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { genres } = useGenre();
	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} margin={"1rem"}>
					<HStack>
						<Image
							src={genre.image_background}
							boxSize={"38px"}
							borderRadius={"10"}
						/>
						<Button
							fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
							onClick={() => {
								console.log(genre.name);
								onSelectGenre(genre);
							}}
							variant="link"
							fontSize={"xl"}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
