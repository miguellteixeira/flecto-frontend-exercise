export default function PlanetsTableLoading() {
  return Array.from({ length: 10 }, (_, i) => (
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
  ));
}
