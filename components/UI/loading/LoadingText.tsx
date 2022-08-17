import en from '@locales/en/common.json';
import LoadingSpinner from './LoadingSpinner';

interface ILoadingText {
  text?: string;
}

const LoadingText = ({ text = en.loading }: ILoadingText) => (
  <div className="w-full flex align-middle p-2">
    <LoadingSpinner /> {text}
  </div>
);

export default LoadingText;
