import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import ProductRange from '@/components/ProductRange';
import { FEATURES } from '@/constants';

export async function generateMetadata() {
  return {
    title: 'The Eggsperts',
    description:
      "Discover the freshest eggs and purest honey at our Victoria Market store on Queen St. Indulge in nature's goodness with our premium selection. Visit us for farm-fresh delights, quality guaranteed. Your source for wholesome goodness in the heart of Victoria Market. Taste the difference today!",
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
