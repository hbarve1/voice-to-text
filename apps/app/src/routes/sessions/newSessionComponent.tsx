import { useState } from 'react';
import {
  AudioRecorder,
  DialogBox,
  Editor,
  InputSelect,
  UserCard,
} from '@suki-ai/react-components';
import {
  useAudioInputList,
  useAudioPermission,
  useLanguageSelect,
  useSpeechRecognition,
} from '@suki-ai/react-hooks';

export function NewSessionComponent({ patient }: { patient: any }) {
  const [audioPermissionStatus, audioPermissionError] = useAudioPermission();
  const { devices, selectedDevice, setSelectedDevice } = useAudioInputList({
    audioPermissionStatus,
  });
  const { languages, selectedLanguage, setSelectedLanguage } =
    useLanguageSelect({
      defaultLanguage: 'en-US',
    });

  const {
    isRecording,
    selectedSpeechRecognition,
    setSelectedSpeechRecognition,
    SpeechRecognitionOptions,
    handleStart,
    handleStop,
    transcript,
  } = useSpeechRecognition({
    // language: selectedLanguage.value,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { name } = patient;

  const handleOnClickBookmark = () => null;
  const handleOnClickMicrophone = () => {
    if (isRecording) {
      handleStop();
      return;
    }
    handleStart();
  };
  const handleOnClickOption = () => {
    setIsDialogOpen(true);
  };
  const handleDialogOnClose = () => {
    setIsDialogOpen(false);
  };
  const handleSelectLanguageOnChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    setSelectedLanguage({ value, name });
    setIsDialogOpen(false);
  };
  const selectInputDeviceOptions = devices.map(
    ({ deviceId, label, groupId, kind }) => {
      return {
        value: groupId,
        name: label,
      };
    }
  );
  const handleSelectInputDeviceOnChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    const device = devices.find(
      ({ groupId, label }) => groupId === value && label === name
    );
    setSelectedDevice({
      value: device.groupId,
      name: device.label,
    });
    setIsDialogOpen(false);
  };
  const handleSelectSpeechRecognitionOnChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    const option = SpeechRecognitionOptions.find(
      (option) => option.value === value
    );

    setSelectedSpeechRecognition(option);
    setIsDialogOpen(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="">
        <UserCard name={name} age={patient.age} />
      </div>
      <div className="flex flex-1 mx-1 rounded-md">
        <Editor transcript={transcript} />
      </div>

      <AudioRecorder
        onClickBookmark={handleOnClickBookmark}
        onClickMicrophone={handleOnClickMicrophone}
        onClickOption={handleOnClickOption}
        audioPermissionStatus={audioPermissionStatus}
        selectedDevice={selectedDevice}
        isRecording={isRecording}
      />

      <DialogBox isOpen={isDialogOpen} onClose={handleDialogOnClose}>
        <InputSelect
          label="Select Voice Recognition Engine"
          options={SpeechRecognitionOptions}
          value={selectedSpeechRecognition}
          onChange={handleSelectSpeechRecognitionOnChange}
        />

        <hr />

        <InputSelect
          label="Select Language"
          options={languages}
          value={selectedLanguage}
          onChange={handleSelectLanguageOnChange}
        />

        <hr />

        <InputSelect
          label="Select Input Device"
          options={selectInputDeviceOptions}
          value={selectedDevice}
          onChange={handleSelectInputDeviceOnChange}
        />
      </DialogBox>
    </div>
  );
}
