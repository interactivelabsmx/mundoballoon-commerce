import type { IActiveFilter } from './FilterBar';

interface IFilterBarCheckbox {
  id: number | null | undefined;
  sectionId: string;
  value: string;
  isSelected: (id: string) => boolean;
  addFilter: (filter: IActiveFilter) => void;
}

const FilterBarCheckbox = ({
  id,
  sectionId,
  value,
  isSelected,
  addFilter,
}: IFilterBarCheckbox) => (
  <div className="flex items-center">
    <input
      id={`${sectionId}-${id}`}
      name={`${sectionId}[]`}
      value={value}
      type="checkbox"
      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
      checked={isSelected(`${sectionId}-${id}`)}
      onChange={() =>
        addFilter({
          id: `${sectionId}-${id}`,
          label: value,
        })
      }
    />
    <label
      htmlFor={`${sectionId}-${id}`}
      className="ml-3 text-sm text-gray-900 font-medium pr-6 whitespace-nowrap"
    >
      {value}
    </label>
  </div>
);

export default FilterBarCheckbox;
