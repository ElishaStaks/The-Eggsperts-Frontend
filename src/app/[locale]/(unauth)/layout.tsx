import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // const t = useTranslations('RootLayout');

  return <BaseTemplate>{children}</BaseTemplate>;
}
