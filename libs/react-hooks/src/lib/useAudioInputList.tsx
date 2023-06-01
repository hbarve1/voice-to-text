import React, { useEffect, useState } from 'react';
import type { ENUM_AUDIO_PERMISSION_STATUS } from './useAudioPermissions';

export function useAudioInputList({
  audioPermissionStatus,
}: {
  audioPermissionStatus: ENUM_AUDIO_PERMISSION_STATUS;
}) {
  const [devices, setDevices] = useState<any[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      setDevices(devices.filter(({ kind }) => kind === 'audioinput'));
      setSelectedDevice({
        value: devices[0].groupId,
        name: devices[0].label,
      });
    });
  }, [audioPermissionStatus]);

  return { devices, selectedDevice, setSelectedDevice };
}
