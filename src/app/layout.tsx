/* imports
*/ 
  import type { Metadata } from "next";

  // fonts
  import { Roboto_Slab, Roboto, Roboto_Serif } from 'next/font/google';

  // global styles
  import "@/styles/global.scss";

// fonts config
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '900'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '900'],
  display: 'swap'
})

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Eduardo Antonio's Portfolio",
  description: "Used to show who i'm and what can i do!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={
          `${robotoSlab.className} 
          ${roboto.className} 
          ${robotoSerif.className}`}>
        {children}
      </body>
    </html>
  );
}
