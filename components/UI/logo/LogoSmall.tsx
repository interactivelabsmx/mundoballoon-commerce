import Image from 'next/future/image';
import Link from 'next/link';

const LogoSmall = () => (
  <Link href="/">
    <a>
      <span className="sr-only">Logo</span>
      <Image
        width={32}
        height={32}
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
    </a>
  </Link>
);

export default LogoSmall;
