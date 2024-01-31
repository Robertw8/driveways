import sprite from '../../assets/sprite.svg';

interface IconProps {
  name: string;
  size: number;
  fill?: string;
  stroke: string;
  className: string;
}

const Icon: React.FC<IconProps> = ({ name, size, fill, stroke, className }) => {
  return (
    <svg
      style={{ width: size, height: size, fill, stroke }}
      className={className}
    >
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </svg>
  );
};

export default Icon;
