import { useEffect, useState } from "react"
import apiClient from "../services/apiClient";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export interface FetchGenresResponses {
    count: number;
    results: Genre[]
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    apiClient
    .get<FetchGenresResponses>(`/genres`)
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])
  return { genres, error, isLoading}
}

export default useGenre