import React from 'react';

import AboutUs from '@/components/AboutUs';
import CallToAction from '@/components/CallToAction';
import Mission from '@/components/Mission';

export async function generateMetadata() {
  return {
    title: 'About Us - The Eggsperts',
    description:
      'Discover the story behind The Eggsperts - your go-to source for premium eggs and honey. Dive into our commitment to quality, sustainable practices, and the pure goodness that sets us apart. Join us in celebrating the essence of nature, one egg and jar of honey at a time.',
  };
}

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
