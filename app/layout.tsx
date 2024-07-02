import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import type { Metadata } from 'next';
import Header from "@/app/src/components/header";
import Footer from "@/app/src/components/footer";
import { PrismicPreview } from "@prismicio/next";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();
  const settings = await client.getSingle('settings');

  return {
    title: settings.data.site_title || "Prismic Builder Fallback",
    description: settings.data.meta_description || "Prismic Builder is best app for you!",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={clsx(nunito.variable, nunito_sans.variable)} lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50"></div>
        <PrismicPreview repositoryName={repositoryName}></PrismicPreview>
      </body>
    </html>
  );
}
