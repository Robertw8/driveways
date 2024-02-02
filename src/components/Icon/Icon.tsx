import sprite from '../../assets/images/sprite.svg';

interface IconProps {
  name: string;
  size: number;
  fill?: string;
  stroke?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, className }) => {
  return (
    <svg style={{ width: size, height: size }} className={className}>
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </svg>
  );
};

export default Icon;
