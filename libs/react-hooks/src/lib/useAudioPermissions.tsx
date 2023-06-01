import React, { useEffect } from 'react';

export enum ENUM_AUDIO_PERMISSION_STATUS {
  GRANTED = 'granted',
  DENIED = 'denied',
  PROMPT = 'prompt',
}

/**
 * This is a custom hook that checks for audio permissions.
 * @returns
 */
export function useAudioPermission(): [
  ENUM_AUDIO_PERMISSION_STATUS,
  string | undefined
] {
  const [status, setStatus] = React.useState<ENUM_AUDIO_PERMISSION_STATUS>(
    ENUM_AUDIO_PERMISSION_STATUS.PROMPT
  );
  const [error, setError] = React.useState<string>('');

  useEffect(() => {
    async function checkPermission() {
      try {
        const permissionStatus = await navigator.permissions.query({
          name: 'microphone',
        });
        setStatus(permissionStatus.state as ENUM_AUDIO_PERMISSION_STATUS);

        permissionStatus.onchange = () => {
          setStatus(permissionStatus.state as ENUM_AUDIO_PERMISSION_STATUS);
        };
      } catch (error) {
        setError(error.message);
      }
    }
    checkPermission();
  }, []);

  return [status, error];
}
