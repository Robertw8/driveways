import { Button, type ButtonProps } from 'antd';
import clsx from 'clsx';

interface ButtonPrimaryProps extends ButtonProps {
  text: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  type,
  onClick,
  htmlType,
  className,
  loading,
}) => {
  return (
    <Button
      className={clsx(
        `w-full h-full font-semibold text-xs md:text-sm capitalize font-manrope
     `,
        className
          ? className
          : 'text-white bg-blue-primary hover:bg-blue-secondary hover:text-white focus:bg-blue-secondary focus:text-white'
      )}
      type={type}
      onClick={onClick}
      htmlType={htmlType}
      loading={loading}
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
