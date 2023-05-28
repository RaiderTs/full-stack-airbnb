import ClientOnly from '@/app/components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from '@/app/components/modals/LoginModal';
import Navbar from '@/app/components/navbar/Navbar';
import { Nunito } from 'next/font/google';
import './globals.css';
import ToasterProvider from '@/app/providers/ToasterProvider';

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
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
