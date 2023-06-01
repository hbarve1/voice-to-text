import { WebVoiceProcessor } from '@picovoice/web-voice-processor';

/**
 *
 * @returns
 */
export const useWebVoiceProcessor = ({ engine }: { engine: any }) => {
  function init({
    frameLength = 1600,
    outputSampleRate = 16000,
    deviceId = null,
  }: {
    frameLength?: number;
    outputSampleRate?: number;
    deviceId?: string | null;
    filterOrder?: number;
  } = {}) {
    WebVoiceProcessor.setOptions({
      // frameLength,
      outputSampleRate,
      deviceId,
    });
  }

  async function subscribe() {
    await WebVoiceProcessor.subscribe(engine);
  }

  async function unsubscribe() {
    await WebVoiceProcessor.unsubscribe(engine);
  }

  async function reset() {
    await WebVoiceProcessor.reset();
  }

  return { init, subscribe, unsubscribe, reset, WebVoiceProcessor };
};
