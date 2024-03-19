import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/getCroppedImages";
interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card width="300px" borderRadius={10} overflow="hidden">
			<Image src={getCroppedImages(game.background_image)} alt={game.name} />
			<CardBody>
				<HStack justifyContent={"space-between"}>
					<PlatformIcons
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize={"2xl"}>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
