import { AutoComplete, AutoCompleteProps, Empty } from 'antd';
import { Icon } from '../../..';

import './SearchInput.styles.css';

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
}) => {
  return (
    <label className="text-light-gray text-sm font-semibold">
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
          <Icon name="chevron" size={20} stroke="#121417" fill="none" />
        }
        notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        allowClear={{
          clearIcon: <Icon name="x" size={16} stroke="#121417" />,
        }}
        onSearch={onSearch}
        onChange={onChange}
      />
    </label>
  );
};

export default SearchInput;
