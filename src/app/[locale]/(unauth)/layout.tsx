'use client';

import { usePathname } from 'next/navigation';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // Extract the pathname from the router
  const currentPage = usePathname();

  return <BaseTemplate currentPage={currentPage}>{children}</BaseTemplate>;
}
