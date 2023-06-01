import { useState, useEffect } from 'react';

import { useSocketConnection } from './useSocketConnection';
import { useWebVoiceProcessor } from './useWebVoiceProcessor';

export function useSpeechRecognitionCustom() {
  const { isConnected, connect, disconnect, socket } = useSocketConnection();

  const webVoiceEngine = {
    engine: {
      onmessage: (e: any) => {
        // console.log('onmessage', e);
        // console.log('log');
        socket.emit('audio-stream', e);
      },
    },
  };

  const webVoiceProcessor = useWebVoiceProcessor(webVoiceEngine);
  const [transcript, setTranscript] = useState('');
  const [transcriptResults, setTranscriptResults] = useState<any[]>([]);

  useEffect(() => {
    socket.on('transcript', (data) => {
      // console.log('transcript', data);
      setTranscriptResults((prev) => [...prev, data.results[0]]);
    });

    return () => {
      socket.off('transcript');
    };
  }, [socket]);

  useEffect(() => {
    // console.log('transcriptResults', transcriptResults);

    setTranscript(
      transcriptResults.reduce((previousValue, currentValue, currentIndex) => {
        if (currentValue?.isFinal) {
          return previousValue + currentValue?.alternatives[0]?.transcript;
        }
        if (currentIndex === transcriptResults.length - 1) {
          return previousValue + currentValue?.alternatives[0]?.transcript;
        }
        return previousValue;
      }, '')
    );
  }, [transcriptResults]);

  return {
    isSocketConnected: isConnected,
    socketConnect: connect,
    socketDisconnect: disconnect,
    transcript,
    transcriptResults,
    webVoiceProcessor,
  };
}
