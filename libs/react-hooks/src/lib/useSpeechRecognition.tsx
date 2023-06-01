import { useState, useEffect } from 'react';

import { useSpeechRecognitionCustom } from './useSpeechRecognitionCustom';
import { useSpeechRecognitionNative } from './useSpeechRecognitionNative';

const SpeechRecognitionOptions = [
  {
    name: 'Suki Voice Recognition (Recommended)',
    value: 'suki',
    // useSpeechRecognition: useSpeechRecognitionCustom,
    isAvailable: true,
  },
  {
    name: 'Native Voice Recognition',
    value: 'native',
    // useSpeechRecognition: useSpeechRecognitionNative,
    isAvailable: Boolean(
      window.SpeechRecognition || window.webkitSpeechRecognition
    ),
  },
];

export function useSpeechRecognition({}) {
  const [selectedSpeechRecognition, setSelectedSpeechRecognition] = useState(
    SpeechRecognitionOptions[0]
  );
  const [isRecording, setIsRecording] = useState(false);

  const nativeSpeechRecognition = useSpeechRecognitionNative();
  const customSpeechRecognition = useSpeechRecognitionCustom();

  const handleStart = () => {
    setIsRecording(true);
    if (selectedSpeechRecognition.value === 'native') {
      nativeSpeechRecognition.recognition!.start();
      return;
    }

    customSpeechRecognition.socketConnect();
    customSpeechRecognition.webVoiceProcessor.init();
    customSpeechRecognition.webVoiceProcessor.subscribe();
  };
  const handleStop = () => {
    setIsRecording(false);
    if (selectedSpeechRecognition.value === 'native') {
      nativeSpeechRecognition.recognition!.stop();
      return;
    }

    customSpeechRecognition.webVoiceProcessor.unsubscribe();
    customSpeechRecognition.webVoiceProcessor.reset();
    customSpeechRecognition.socketDisconnect();
  };

  return {
    isRecording,
    SpeechRecognitionOptions,
    selectedSpeechRecognition,
    setSelectedSpeechRecognition,
    handleStart,
    handleStop,
    transcript:
      selectedSpeechRecognition.value === 'suki'
        ? customSpeechRecognition.transcript
        : nativeSpeechRecognition.transcript,
  };
}
