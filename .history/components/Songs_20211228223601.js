import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtoms';
import Song from './Song';

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white">
      {playlist?.tracks.items.map((tracks) => (
        <Song />
      ))}
    </div>
  );
}

export default Songs;
