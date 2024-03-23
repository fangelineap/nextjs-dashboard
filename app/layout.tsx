import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* menggunakan antialiased untuk 
      membuat font menjadi lebih smooth */}
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: `%s | Fei's Dashboard`,
    default: `Fei's Dashboard`
  },
  description: 'Next.js course',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};