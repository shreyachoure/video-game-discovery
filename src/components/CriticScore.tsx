import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}
const CriticScore = ({ score }: Props) => {
	return <Badge fontSize={'16px'} color='green.500' borderRadius={4} padding={2}>{score}</Badge>;
};

export default CriticScore;
