import { AutoComplete, type AutoCompleteProps, Empty } from 'antd';
import { Icon } from '../../..';
import '../tailwind.css';

interface SearchInputProps extends AutoCompleteProps {
  label: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  options,
  label,
  className,
  onSearch,
  onChange,
  onClear,
  value,
}) => {
  return (
    <label className="filter-label">
      {label}
      <AutoComplete
        options={options}
        filterOption={(input, option) =>
          (String(option?.value) ?? '').includes(input.toLowerCase())
        }
        className={`search-input ${className}`}
        dropdownStyle={{
          textTransform: 'capitalize',
        }}
        placeholder={placeholder}
        defaultActiveFirstOption={false}
        suffixIcon={
          <Icon name="chevron" size={20} className="stroke-primary fill-none" />
        }
        notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        allowClear={{
          clearIcon: <Icon name="x" size={16} className="stroke-primary" />,
        }}
        onSearch={onSearch}
        onChange={onChange}
        onClear={onClear}
        value={value}
      />
    </label>
  );
};

export default SearchInput;
