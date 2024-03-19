import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

export interface Platform {
    id: number;
    name: string;

}

interface FetchPlatforms {
    count: number;
    results: Platform[]
}
const usePlatforms = () => {

    const[platforms, setPlatforms]= useState<Platform[]>([]);
    const[error, setError] = useState(null);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        apiClient
        .get<FetchPlatforms>("/platforms/lists/parents")
        .then(res => {
            setPlatforms(res.data.results)
            setIsLoading(false)
        })
        .catch(err => {setError(err.message)
                      setIsLoading(false)}) 
    }, [])

    
    return {platforms, error, isLoading}

    

}

export default usePlatforms