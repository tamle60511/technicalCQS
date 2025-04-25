import React from 'react';
import { Head } from '@inertiajs/react';

import Footer from './Footer';
import Header from './Header';
import TopBar from '../components/Topbar';




interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
