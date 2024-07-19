import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface FetchPlatforms {
	count: number;
	results: Platform[];
}
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
