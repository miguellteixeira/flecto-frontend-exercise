import ky from 'ky';
import { useQuery } from '@tanstack/react-query';
import type { SwapiList, Planet } from '@/types';

const fetchPlanets = async (needle = '', page = 1) => {
  let url = `https://swapi.dev/api/planets/?page=${page}`;
  url += needle.length ? `&search=${needle}` : '';
  return await ky(url).json<SwapiList<Planet>>();
};

const usePlanets = (needle = '', page = 1) => {
  return useQuery({
    queryKey: ['planets', needle, page],
    queryFn: () => fetchPlanets(needle, page),
  });
};

export { usePlanets, fetchPlanets };
