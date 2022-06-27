import { LogoutIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import AvatarDefault from '@components/UI/Icons/AvatarDefault';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import { useAuth } from '@providers/AuthProvider';

const NavbarUserProfile = () => {
  const { logout, user } = useAuth();
  const name = user?.displayName || user?.email || user?.phoneNumber;
  return (
    <div className="flex bg-gray p-4 justify-around">
      <div className="flex items-center">
        <div>
          {user?.photoURL ? (
            <Image
              className="inline-block h-10 w-10 rounded-full"
              src={user?.photoURL}
              alt="Profile Photo"
              height={40}
              width={40}
            />
          ) : (
            <AvatarDefault />
          )}
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-white truncate">{name}</p>
        </div>
      </div>
      <div>
        <SecundaryButton onClick={logout}>
          <span className="sr-only">Log out</span>
          <LogoutIcon height={24} />
        </SecundaryButton>
      </div>
    </div>
  );
};

export default NavbarUserProfile;
