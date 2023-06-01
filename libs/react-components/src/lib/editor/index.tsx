import React, { Fragment } from 'react';

export function Editor({ transcript = '' }: { transcript: string }) {
  return (
    <div className="p-2 w-full bg-cyan-50">
      {transcript.length === 0 && (
        <div className="text-center text-2xl text-gray-500">
          Start speaking to see the transcript
        </div>
      )}
      {transcript}
    </div>
  );
}
