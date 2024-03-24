import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Slab } from 'next/font/google';

const josefinSans = Josefin_Slab({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'HWR charity foundation',
  description:
    'Together, we can make a meaningful difference in the lives of refugees by providing essential support, opportunities, and pathways to a brighter future.',
  icons: '/heart.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/heart.png' type='image/png' />
      </head>
      <body className={josefinSans.className}>
        <div id='modal'></div>
        {children}
      </body>
    </html>
  );
}
