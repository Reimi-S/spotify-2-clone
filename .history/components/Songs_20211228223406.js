import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtoms';

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div>
      {playlist?.tracks.items.map((tracks) => (
        <div>{tracks.track.name}</div>
      ))}
    </div>
  );
}

export default Songs;
