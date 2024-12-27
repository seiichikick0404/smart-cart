import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP} from 'next/font/google';
import { ThemeProvider } from '@/app/components/theme-provider';


const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe Cart',
  description: 'Manage your recipes and automatically add ingredients to your cart',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={notoSansJP.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}