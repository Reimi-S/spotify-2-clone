import useSpotify from '../hooks/useSpotify';

function Song({ order, track }) {
  const spotifyApi = useSpotify();

  return (
    <div>
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p>{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>
    </div>
  );
}

export default Song;
