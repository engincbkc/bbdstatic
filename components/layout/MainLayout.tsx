'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
