import { Button, ButtonProps } from 'antd';

interface ButtonPrimaryProps extends ButtonProps {
  text: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  type,
  onClick,
}) => {
  return (
    <Button
      className="w-full h-full font-semibold text-xs md:text-sm bg-blue-primary uppercase text-white font-manrope p-3.5
     hover:bg-blue-secondary hover:text-white focus:bg-blue-secondary focus:text-white"
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
