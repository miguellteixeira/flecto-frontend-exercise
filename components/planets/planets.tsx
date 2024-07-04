'use client';

import { ChangeEvent, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { usePlanets } from '@/hooks';
import {
  GlobeAmericasIcon,
  CubeTransparentIcon,
  UserGroupIcon,
  SunIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/solid';

export default function Planets() {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchNeedle] = useDebounce(inputValue, 300);
  const { data, status } = usePlanets(searchNeedle, page);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setInputValue(event.target.value);
  };

  if (status === 'error') {
    return <p>Error :(</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden bg-white dark:border-neutral-700 dark:shadow-gray-900">
            <div className="py-3 px-4">
              <div className="relative max-w-xs">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  name="hs-table-with-pagination-search"
                  id="hs-table-with-pagination-search"
                  className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm outline-transparent focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Find planet..."
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg
                    className="size-4 text-gray-400 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>
            </div>

            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    <GlobeAmericasIcon className="size-4 inline" /> Planet
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    <CubeTransparentIcon className="size-4 inline" /> Diameter
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    <UserGroupIcon className="size-4 inline" /> Population
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    <SunIcon className="size-4 inline" /> Climate
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    <Square3Stack3DIcon className="size-4 inline" /> Terrain
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {status === 'pending'
                  ? Array.from({ length: 10 }, (_, i) => (
                      <tr key={i}>
                        <td className="h-12 px-6 py-4">
                          <div className="w-20 pr-6 bg-gray-200 rounded dark:bg-neutral-700 h-full"></div>
                        </td>
                        <td className="h-12 px-6 py-4">
                          <div className="bg-gray-200 rounded dark:bg-neutral-700 h-full"></div>
                        </td>
                        <td className="h-12 px-6 py-4">
                          <div className="bg-gray-200 rounded dark:bg-neutral-700 h-full"></div>
                        </td>
                        <td className="h-12 px-6 py-4">
                          <div className="w-40 bg-gray-200 rounded dark:bg-neutral-700 h-full"></div>
                        </td>
                        <td className="h-12 px-6 py-4">
                          <div className="w-72 bg-gray-200 rounded dark:bg-neutral-700 h-full"></div>
                        </td>
                      </tr>
                    ))
                  : ''}
                {status === 'success'
                  ? data.results.map((planet, index) => {
                      return (
                        <tr
                          className="hover:bg-gray-100 dark:hover:bg-neutral-700 hover:cursor-pointer"
                          key={index}
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
                    })
                  : ''}
              </tbody>
            </table>

            <nav
              className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
              aria-label="Table navigation"
            >
              {status === 'pending' ? (
                <div className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
              ) : (
                ''
              )}

              {status === 'success' ? (
                <div className="grow flex flex-column justify-between">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1-{data.results.length}
                    </span>{' '}
                    of{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {data.count}
                    </span>
                  </span>
                  <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                      <a
                        href="#"
                        onClick={() => setPage((old) => Math.max(old - 1, 0))}
                        className={`${!data.previous ? 'pointer-events-none opacity-60' : ''} flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                      >
                        Previous
                      </a>
                    </li>
                    {Array.from(
                      { length: Math.ceil(data.count / 10) },
                      (_, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            onClick={() => setPage(index + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === index + 1 ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
                          >
                            {index + 1}
                          </a>
                        </li>
                      ),
                    )}
                    <li>
                      <a
                        href="#"
                        onClick={() => setPage(page + 1)}
                        className={`${!data.next ? 'pointer-events-none opacity-60' : ''} flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
