import { type ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Toaster } from 'sonner';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';

type IBaseTemplateProps = {
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => {
  return (
    <>
      <Navbar />
      <Toaster expand position="top-right" richColors />
      <main className="relative overflow-hidden">{props.children}</main>
      <Footer />
    </>
  );
};

export { BaseTemplate };
