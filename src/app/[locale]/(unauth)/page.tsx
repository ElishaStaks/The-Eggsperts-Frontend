import { getTranslations } from 'next-intl/server';

import Features from '@/components/Features';
import Hero from '@/components/Hero';
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
      <Features />
    </>
  );
}
