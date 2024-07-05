import { useStore } from '@/store';
import { ChangeEvent } from 'react';

export default function PlanetsTableSearch() {
  const { setPage, inputValue, setInputValue } = useStore();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setInputValue(event.target.value);
  };

  return (
    <div className="relative max-w-xs float-right">
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
  );
}
