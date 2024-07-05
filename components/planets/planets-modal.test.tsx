import * as useStore from '@/store';
import { describe, it, expect, vi, afterEach } from 'vitest';
import PlanetsModal from './planets-modal';
import { render, screen } from '@testing-library/react';

describe('PlanetsModal', () => {
  const useStoreSpy = vi.spyOn(useStore, 'useStore');

  afterEach(() => {
    useStoreSpy.mockClear();
  });

  it('should render a modal with planet info', () => {
    useStoreSpy.mockReturnValue({
      openModal: true,
      selectedPlanet: {
        name: 'Tatooine',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: '1',
        population: '200000',
      },
    });

    render(<PlanetsModal />);

    // @TODO: Add assertions to check for planet info
  });
});
