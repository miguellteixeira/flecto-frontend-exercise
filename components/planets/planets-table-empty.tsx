import { GlobeAltIcon } from '@heroicons/react/24/solid';

export default function PlanetsTableEmpty() {
  return (
    <td colSpan={5} className="py-56">
      <div className="flex flex-col items-center justify-center">
        <GlobeAltIcon className="size-24 text-gray-500 mb-5" />
        <h6 className="text-2xl text-gray-500 font-bold dark:text-white">
          Sorry! Couldn't find a planet with that name..
        </h6>
      </div>
    </td>
  );
}
