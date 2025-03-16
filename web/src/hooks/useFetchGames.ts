import { useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function useFetchGames(url: string) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        setGames(response.data);
      } catch (err) {
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { games, loading, error };
}
