'use client';

import { HiExclamation } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import { useDebounce } from 'use-debounce';
import { usePlanets } from '@/hooks';
import { useStore } from '@/store';
import { Planet } from '@/types';
import PlanetsTableSearch from '@/components/planets/planets-table-search';
import PlanetsTableHeader from '@/components/planets/planets-table-header';
import PlanetsTableNavigation from '@/components/planets/planets-table-navigation';
import PlanetsTableLoading from '@/components/planets/planets-table-loading';
import PlanetsTableEmpty from './planets-table-empty';

export default function PlanetsTable() {
  const { page, inputValue, setSelectedPlanet, setOpenModal } = useStore();
  const [searchNeedle] = useDebounce(inputValue, 300);
  const { data, status } = usePlanets(searchNeedle, page);

  const showPlanetModal = (planet: Planet) => {
    setSelectedPlanet(planet);
    setOpenModal(true);
  };

  if (status === 'error') {
    return (
      <Alert color="failure" icon={HiExclamation}>
        <span className="font-medium">Something went wrong!</span> May the force
        be with you.
      </Alert>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden bg-white dark:border-neutral-700 dark:shadow-gray-900">
            <div className="py-3 px-4">
              <PlanetsTableSearch />
            </div>

            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <PlanetsTableHeader />

              <tbody className="divide-y divide-gray-100 dark:divide-neutral-700">
                {status === 'pending' && <PlanetsTableLoading />}
                {status === 'success' && !data.results.length && (
                  <PlanetsTableEmpty />
                )}
                {status === 'success' &&
                  data.results.map((planet, index) => {
                    return (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-neutral-700 hover:cursor-pointer"
                        key={index}
                        onClick={() => showPlanetModal(planet)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {planet.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {planet.diameter}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {planet.population}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {planet.climate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {planet.terrain}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <PlanetsTableNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
