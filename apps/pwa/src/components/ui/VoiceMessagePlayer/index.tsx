import { useRef, useState } from 'react';

import PauseIcon from '@assets/icons/Pause.svg';
import PlayIcon from '@assets/icons/Play.svg';
import { textShorter } from '@utils/scripts';

import useTheme from '@hooks/useTheme';

import useFetchAudio from './__hooks__/useFetchAudio';
import { VoiceMessagePlayerPropsType } from './type';

const VoiceMessagePlayer = ({ voiceUrl }: VoiceMessagePlayerPropsType) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { colors } = useTheme();
  const { audioSrc } = useFetchAudio({ voiceUrl });

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const name = textShorter(voiceUrl, 24);

  return (
    <div className="flex items-center gap-2  bg-gray-100 rounded-xl">
      <button
        onClick={togglePlay}
        className=" rounded-full w-12 h-12 flex justify-center items-center"
        disabled={!audioSrc}
        style={{ backgroundColor: colors.PrimaryWoman_PrimaryContainer }}
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-auto" style={{ fill: colors.PrimaryWoman_Primary }} />
        ) : (
          <PlayIcon className="w-5 h-auto" style={{ fill: colors.PrimaryWoman_Primary }} />
        )}
      </button>
      <audio
        ref={audioRef}
        src={audioSrc || ''}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  );
};

export default VoiceMessagePlayer;
