import React, { useEffect, useState } from 'react';

/**
 *
 * @param param
 * @returns
 */
export function useSpeechRecognitionNative({
  language = 'en-US',
  continuous = true,
  interimResults = true,
}: {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
} = {}) {
  const [error, setError] = useState('');
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const [transcriptResult, setTranscriptResult] = useState<any[]>();
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (
      !('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
    ) {
      setError(
        'Web Speech API is not supported by this browser. Please upgrade to Chrome version 25 or later.'
      );
      return;
    }
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    // Create a new SpeechRecognition object
    const recognition = new SpeechRecognition();
    setRecognition(recognition);

    // Configure recognition settings
    recognition.lang = language; // Language for speech recognition
    recognition.continuous = continuous; // Enable continuous recognition
    recognition.interimResults = interimResults; // Enable interim results

    // Define event handlers
    recognition.addEventListener('start', () => {
      // console.log('Speech recognition started.');
      setIsRecording(true);
    });
    recognition.addEventListener('end', () => {
      // console.log('Speech recognition ended.');
      setIsRecording(false);
    });

    recognition.addEventListener('result', (event: any) => {
      const results = event.results as SpeechRecognitionResult;
      // console.log('Speech recognition result:', results);

      setTranscriptResult(
        Array.from(results).map(({ isFinal, length, ...rest }) => {
          return {
            scripts: Array.from({ length }).map((_, i) => {
              const { transcript, confidence } = rest[i];
              return {
                transcript,
                confidence,
              };
            }),
            isFinal,
            length,
          };
        })
      );
    });

    recognition.addEventListener('error', (event: any) => {
      console.error('Speech recognition error:', event.error);
    });
  }, [continuous, interimResults, language]);

  useEffect(() => {
    setTranscript(
      transcriptResult?.reduce((previousValue, currentValue) => {
        return (
          previousValue +
          currentValue.scripts.reduce((prev, current) => {
            return prev + current.transcript;
          }, '')
        );
      }, '')
    );
  }, [transcriptResult]);

  return { recognition, transcriptResult, transcript, error };
}
