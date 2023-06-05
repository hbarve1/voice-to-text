import { useState } from 'react';
import { demoPatients } from '@suki-ai/constants';
import { PatientCard } from '@suki-ai/react-components';

export function Patients() {
  const [patients] = useState(demoPatients);

  return (
    <div className="flex flex-col">
      {patients.map((patient) => {
        return <PatientCard key={patient.id} {...patient} />;
      })}
    </div>
  );
}
