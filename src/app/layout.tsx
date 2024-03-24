import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Slab } from 'next/font/google';

const josefinSans = Josefin_Slab({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={josefinSans.className}>
        <div id='modal'></div>
        {children}
      </body>
    </html>
  );
}
