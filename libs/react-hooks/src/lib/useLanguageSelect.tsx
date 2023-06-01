import { useState } from 'react';

const languages = [
  { value: 'en-US', name: 'English' },
  { value: 'en-IN', name: 'English (India)' },
  { value: 'es-ES', name: 'Spanish' },
  { value: 'fr-FR', name: 'French' },
  { value: 'de-DE', name: 'German' },
  { value: 'it-IT', name: 'Italian' },
  { value: 'ja-JP', name: 'Japanese' },
  { value: 'hi-IN', name: 'Hindi' },
];

export function useLanguageSelect({
  defaultLanguage = 'en-US',
}: {
  defaultLanguage?: string;
}) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(({ value }) => value === defaultLanguage) || languages[0]
  );

  return { languages, selectedLanguage, setSelectedLanguage };
}
