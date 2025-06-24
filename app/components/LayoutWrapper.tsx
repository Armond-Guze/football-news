'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith('/studio');

  return (
    <>
      {!isStudioRoute && <Navbar />}
      <main>{children}</main>
      {!isStudioRoute && <Footer />}
    </>
  );
}
