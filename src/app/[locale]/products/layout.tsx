'use client';

/* eslint-disable no-console */
import { usePathname } from 'next/navigation';

import TopBar from '@/components/TopBar';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // Extract the pathname from the router
  const currentPage = usePathname();

  return (
    <BaseTemplate banner={<TopBar />} currentPage={currentPage}>
      {children}
    </BaseTemplate>
  );
}
