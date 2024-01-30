import TopBar from '@/components/TopBar';
import { BaseTemplate } from '@/templates/BaseTemplate';

export async function generateMetadata() {
  return {
    title: 'The Eggsperts - Explore Our Range of Quality Products',
    description:
      'Discover a diverse range of premium products at The Eggsperts. From farm-fresh eggs to pure honey, explore our selection and find detailed information on each product. Choose quality, choose freshness with The Eggsperts.',
  };
}

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <BaseTemplate banner={<TopBar />}>{children}</BaseTemplate>;
}
