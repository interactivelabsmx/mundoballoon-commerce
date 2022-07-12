import { UserIcon } from '@heroicons/react/outline';

interface IAvatarDefault {
  dark?: boolean;
}

const AvatarDefault = ({ dark }: IAvatarDefault) => (
  <span
    className={`h-8 w-8 rounded-full overflow-hidden flex items-center justify-center ${
      dark ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-400'
    }`}
  >
    <UserIcon className="h-6 w-6" />
  </span>
);

export default AvatarDefault;
