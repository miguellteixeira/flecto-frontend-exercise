import ky from 'ky';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchPlanets } from '@/hooks/usePlanets/index';

// @TODO: Fix ky mock
vi.mock('ky', () => {
  return {
    default: vi.fn(() => ({
      json: () => vi.fn(),
    })),
  };
});

describe('usePlanets', () => {
  beforeEach(() => {
    (ky as any).mockReset();
  });

  // describe('fetchPlanets', () => {
  //   describe('gets called without a search needle and page', () => {
  //     it('should make a GET request to fetch all planets', async () => {
  //       const planetsMock = [{ id: 1 }, { id: 2 }] as any;
  //       const planets = await fetchPlanets();
  //       expect(ky).toHaveBeenCalledWith(
  //         'https://swapi.dev/api/planets/?page=1',
  //       );
  //       expect(planets).toStrictEqual(planetsMock);
  //     });
  //   });

  //   describe('gets called with a search needle', () => {
  //     it('should make a GET request to search for a planet', async () => {
  //       const planetsMock = [{ id: 1 }, { id: 2 }] as any;
  //       const planets = await fetchPlanets('earth');
  //       expect(ky).toHaveBeenCalledWith(
  //         'https://swapi.dev/api/planets/?page=1&search=earth',
  //       );
  //       expect(planets).toStrictEqual(planetsMock);
  //     });
  //   });

  //   describe('gets called with a search needle and page', () => {
  //     it('should make a GET request to search for a planet with paginated results', async () => {
  //       const planetsMock = [{ id: 1 }, { id: 2 }] as any;
  //       const planets = await fetchPlanets('earth', 10);
  //       expect(ky).toHaveBeenCalledWith(
  //         'https://swapi.dev/api/planets/?page=10&search=earth',
  //       );
  //       expect(planets).toStrictEqual(planetsMock);
  //     });
  //   });
  // });
});
