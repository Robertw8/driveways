import { Select, type SelectProps } from 'antd';
import { Icon } from '../../..';
import '../SearchInput/tailwind.css';

interface PriceFilterProps extends SelectProps {
  label: string;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  options,
  label,
  className,
  onChange,
  onClear,
  value,
}) => {
  return (
    <label className="text-light-gray text-sm font-semibold">
      {label}
      <Select
        options={options}
        className={`search-input ${className}`}
        defaultActiveFirstOption={false}
        allowClear={{
          clearIcon: <Icon name="x" size={16} className="stroke-primary" />,
        }}
        suffixIcon={
          <Icon name="chevron" size={20} className="stroke-primary fill-none" />
        }
        onChange={onChange}
        onClear={onClear}
        value={value || 'To $'}
      >
        PriceFilter
      </Select>
    </label>
  );
};

export default PriceFilter;
