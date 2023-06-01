export function InputSelect({
  label = 'Select Input',
  options = [],
  value,
  onChange,
}: {
  label: string;
  value: {
    name: string;
    value: string;
  };
  options: {
    name: string;
    value: string;
  }[];
  onChange: ({ value, name }: { value: string; name: string }) => void;
}) {
  return (
    <div className="mb-1 w-full">
      <label>{label}:</label>
      <select
        onChange={(e) => {
          const value = e.target.value;
          const option = options.find((option) => option.value === value);
          if (option) {
            onChange(option);
          }
        }}
        value={value?.value}
        className="w-full border border-gray-200 rounded px-4 py-2 appearance-none outline-none text-gray-800 mb-2"
      >
        {options.map(({ name, value }) => {
          return (
            <option key={`${value}-${name}`} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
