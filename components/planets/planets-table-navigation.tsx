import { useDebounce } from 'use-debounce';
import { usePlanets } from '@/hooks';
import { useStore } from '@/store';

export default function PlanetsTableNavigation() {
  const { page, inputValue, setPage } = useStore();
  const [searchNeedle] = useDebounce(inputValue, 300);
  const { data, status } = usePlanets(searchNeedle, page);

  return (
    (status !== 'success' || !!data.results.length) && (
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
        aria-label="Table navigation"
      >
        {status === 'pending' && (
          <div className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
        )}

        {status === 'success' && (
          <div className="grow flex flex-column justify-between items-end">
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
                  onClick={() => setPage(Math.max(page - 1, 0))}
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
                      className={`flex items-center justify-center px-3 h-8 leading-tight dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === index + 1 ? 'text-yellow-700 border border-gray-300 bg-amber-100 hover:bg-amber-200' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
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
        )}
      </nav>
    )
  );
}
