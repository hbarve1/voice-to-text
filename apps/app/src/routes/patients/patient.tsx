import React from 'react';
import { demoPatients } from '@suki-ai/constants';
import { Link, useParams } from 'react-router-dom';
import { IconPlus } from '@suki-ai/react-svg';
import {
  ButtonRounded,
  PatientSessionListItem,
  UserCard,
} from '@suki-ai/react-components';

const patientSessions = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  date: new Date().toISOString(),
  duration: 10,
  title: 'Session',
}));

export function Patient() {
  const { id } = useParams();
  const patient = demoPatients.find((p) => p.id === Number(id));

  if (!patient) {
    return <div>Not Found</div>;
  }
  const { name, age } = patient;

  return (
    <>
      <UserCard name={name} age={age} />

      <div className="p-2 m-2 bg-blue-400 rounded-lg shadow-sm">
        <div className="text-gray-200 text-3xl font-semibold flex justify-between items-center">
          Last sessions
          <Link
            to={`/patients/${id}/sessions`}
            className="ml-2 text-sm underline"
          >
            View all
          </Link>
        </div>
        <div>
          {patientSessions.map((session) => {
            return <PatientSessionListItem key={session.id} {...session} />;
          })}
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
        <ButtonRounded url={`/patients/${id}/sessions/new`}>
          <IconPlus />
        </ButtonRounded>
      </div>
    </>
  );
}
