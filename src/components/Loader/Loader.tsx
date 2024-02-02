import { Spin, type SpinProps } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';

interface LoaderProps extends SpinProps {}

const Loader: React.FC<LoaderProps> = ({ size, className }) => {
  return (
    <Spin
      size={size}
      className={clsx(className ? className : 'absolute-centered')}
      indicator={<LoadingOutlined />}
    />
  );
};

export default Loader;
