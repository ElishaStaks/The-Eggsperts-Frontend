import { getTranslations } from 'next-intl/server';

import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import ProductRange from '@/components/ProductRange';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      <Hero />
      <ProductRange />
      <ImageGallery />
      <Features />
      <Contact />
    </>
  );
}
