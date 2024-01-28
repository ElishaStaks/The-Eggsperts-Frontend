import TopBar from '@/components/TopBar';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <BaseTemplate banner={<TopBar />}>{children}</BaseTemplate>;
}
