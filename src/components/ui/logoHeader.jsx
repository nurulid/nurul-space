import Link from 'next/link';

export const LogoHeader = () => {
  return (
    <Link
      href="/"
      className=" font-semibold font-mono flex gap-2 items-center"
    >
      <img src="/images/nid.jpeg" alt="" width="30" className="rounded-full" />{' '}
      nurrul.com
    </Link>
  );
};
