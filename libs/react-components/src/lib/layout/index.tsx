import React from 'react';
import { Header } from '../header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="pt-12 h-full">{children}</div>
    </>
  );
};
