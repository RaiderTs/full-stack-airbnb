import ClientOnly from '@/app/components/ClientOnly';
import Modal from '@/app/components/modals/Modal';
import Navbar from '@/app/components/navbar/Navbar';
import { Nunito } from 'next/font/google';

import './globals.css';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title='Hello world' />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
