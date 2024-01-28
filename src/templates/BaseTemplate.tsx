'use client';

import { type ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Toaster } from 'sonner';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';

type IBaseTemplateProps = {
  banner?: ReactNode;
  currentPage?: string;
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => {
  return (
    <>
      {props.banner}
      <Navbar page={props.currentPage} />
      <Toaster expand position="top-right" richColors />
      <main className="relative overflow-hidden">{props.children}</main>
      <Footer />
    </>
  );
};

export { BaseTemplate };
