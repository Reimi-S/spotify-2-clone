import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtoms';
import Song from './Song';

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white">
      {playlist?.tracks.items.map((track) => (
        <Song key={track.track.id} />
      ))}
    </div>
  );
}

export default Songs;
