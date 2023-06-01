import React, { useEffect } from 'react';

export function useAudioStream() {
  const [stream, setStream] = React.useState<MediaStream | null>(null);
  const [error, setError] = React.useState<string>('');
  const [sampleRate, setSampleRate] = React.useState<number>(0);

  useEffect(() => {
    async function getAudioStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setStream(stream);
        setSampleRate(stream.getAudioTracks()[0].getSettings().sampleRate);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }

    getAudioStream();
  }, []);

  return { stream, sampleRate, error };
}
