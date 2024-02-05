import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import ProductRange from '@/components/ProductRange';
import { FEATURES } from '@/constants';

export async function generateMetadata() {
  return {
    title: 'Home | The Eggsperts',
    description: 'The Eggsperts landing page',
  };
}

export default function Home() {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      <Hero />
      <ProductRange />
      <ImageGallery />
      <Features featureItems={FEATURES} />
      <Contact />
    </>
  );
}
