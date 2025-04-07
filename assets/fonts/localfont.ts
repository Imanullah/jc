import localFont from 'next/font/local';

const Sohne = localFont({
  src: [
    { path: './Sohne/Sohne-Buch.otf', style: 'normal' },
    { path: './Sohne/Sohne-BuchKursiv.otf', style: 'normal' },
    { path: './Sohne/Sohne-Dreiviertelfett.otf', style: 'normal' },
    { path: './Sohne/Sohne-Extrafett.otf', style: 'normal' },
    { path: './Sohne/Sohne-ExtrafettKursiv.otf', style: 'normal' },
    { path: './Sohne/Sohne-Extraleicht.otf', style: 'normal' },
    { path: './Sohne/Sohne-Kraftig.otf', style: 'normal' },
    { path: './Sohne/Sohne-KraftigKursiv.otf', style: 'normal' },
    { path: './Sohne/Sohne-LeichtKursiv.otf', style: 'normal' },
  ],
  // subsets: ['latin'],
  display: 'swap',
  variable: '--font-sohne-sans',
});

const Bagoss = localFont({
  src: [{ path: './Bagoss/BagossTRIALVF.ttf', style: 'normal' }],
  display: 'swap',
  variable: '--font-bagoss-sans',
});

export { Sohne, Bagoss };
