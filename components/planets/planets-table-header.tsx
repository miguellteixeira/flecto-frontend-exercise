import {
  GlobeAmericasIcon,
  CubeTransparentIcon,
  UserGroupIcon,
  SunIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/solid';

export default function PlanetsTableHeader() {
  return (
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
  );
}
