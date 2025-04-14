import { Fira_Sans, Fira_Mono } from 'next/font/google';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fira-sans',
});
const fira_mono = Fira_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal'],
  variable: '--font-fira-mono',
});

export { fira_sans, fira_mono };
