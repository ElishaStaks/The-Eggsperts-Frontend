import React from 'react';

import AboutUs from '@/components/AboutUs';
import CallToAction from '@/components/CallToAction';
import Mission from '@/components/Mission';

const page = () => {
  return (
    <>
      <AboutUs />
      <Mission />
      {/* <Team /> */}
      <CallToAction />
    </>
  );
};

export default page;
