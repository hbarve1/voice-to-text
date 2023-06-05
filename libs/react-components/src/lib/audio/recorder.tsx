import { ENUM_AUDIO_PERMISSION_STATUS } from '@suki-ai/react-hooks';
import {
  IconBookmark,
  IconEllipsisVertical,
  IconExclamationCircle,
  IconMicrophone,
  IconStop,
} from '@suki-ai/react-svg';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export function AudioRecorder({
  onClickBookmark,
  onClickMicrophone,
  selectedDevice,
  onClickOption,
  audioPermissionStatus,
  isRecording,
}: {
  onClickBookmark: () => void;
  onClickMicrophone: () => void;
  onClickOption: () => void;
  selectedDevice: MediaDeviceInfo | undefined;
  audioPermissionStatus: ENUM_AUDIO_PERMISSION_STATUS;
  isRecording: boolean;
}) {
  const [audioStatus, setAudioStatus] = useState<string>('');

  useEffect(() => {
    const audioStatusFn = () => {
      switch (audioPermissionStatus) {
        case ENUM_AUDIO_PERMISSION_STATUS.GRANTED:
          return selectedDevice?.name;
        case ENUM_AUDIO_PERMISSION_STATUS.DENIED:
          return 'Microphone permission is required to record audio';
        case ENUM_AUDIO_PERMISSION_STATUS.PROMPT:
          return 'Please provide microphone permission';
        default:
          return 'Please provide microphone permission';
      }
    };

    setAudioStatus(audioStatusFn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioPermissionStatus, selectedDevice]);

  return (
    <div className="bg-red-100 p-2 flex justify-between ">
      <div className="flex p-4 items-center ">
        <button
          className="bg-blue-500 rounded-full p-3 text-white shadow-md"
          onClick={onClickBookmark}
        >
          <IconBookmark />
        </button>
      </div>
      <div className="flex p-4 items-center flex-col">
        <p>{audioStatus}</p>

        <button
          className={classNames(' rounded-full p-3 text-white shadow-md', {
            'bg-red-500':
              audioPermissionStatus === ENUM_AUDIO_PERMISSION_STATUS.DENIED,
            'bg-green-500':
              audioPermissionStatus === ENUM_AUDIO_PERMISSION_STATUS.GRANTED,
            'bg-orange-500':
              audioPermissionStatus === ENUM_AUDIO_PERMISSION_STATUS.PROMPT,
          })}
          onClick={onClickMicrophone}
          disabled={
            audioPermissionStatus === ENUM_AUDIO_PERMISSION_STATUS.DENIED
          }
        >
          {audioPermissionStatus !== ENUM_AUDIO_PERMISSION_STATUS.GRANTED ? (
            <IconExclamationCircle className="w-10 h-10" />
          ) : isRecording ? (
            <IconStop className="w-10 h-10" />
          ) : (
            <IconMicrophone className="w-10 h-10" />
          )}
        </button>
      </div>
      <div className="flex p-4 items-center ">
        <button
          className="bg-blue-500 rounded-full p-3 text-white shadow-md"
          onClick={onClickOption}
        >
          <IconEllipsisVertical />
        </button>
      </div>
    </div>
  );
}
