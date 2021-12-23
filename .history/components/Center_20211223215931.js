import { useSession } from 'next-auth/react';

function Center() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-grow text-white">
      <h1>I am center</h1>
      <header>
        <div>
          <img className="rounded-full w-10 h-10" src={session.user?.image} />
          <h2>{session?.user.name}</h2>
        </div>
      </header>
    </div>
  );
}

export default Center;
