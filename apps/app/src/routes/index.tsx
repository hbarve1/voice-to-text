import { Route, Routes, Link } from 'react-router-dom';
import { Layout } from '@suki-ai/react-components';

import { Home } from './home';
import { Patients } from './patients';
import { Patient } from './patients/patient';
import { PageSessionNew } from './sessions/new';

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/:id" element={<Patient />} />
        <Route path="/patients/:id/sessions/new" element={<PageSessionNew />} />

        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Layout>
  );
}
