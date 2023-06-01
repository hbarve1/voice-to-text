import React from 'react';
import { demoPatients } from '@suki-ai/constants';
import { useParams } from 'react-router-dom';
import { NotFound } from '@suki-ai/react-components';

import { NewSessionComponent } from './newSessionComponent';

export function PageSessionNew() {
  const { id } = useParams();
  const patient = demoPatients.find((p) => p.id === Number(id));

  if (!patient) {
    return <NotFound />;
  }

  return <NewSessionComponent patient={patient} />;
}
