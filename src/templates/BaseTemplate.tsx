import { type ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';

type IBaseTemplateProps = {
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">{props.children}</main>
      <Footer />
    </>
  );
};

export { BaseTemplate };
