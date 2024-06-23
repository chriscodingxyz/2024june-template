import type { Metadata } from "next";
import { Inter, Silkscreen, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import "@/styles/fonts.css";

const inter = Inter({ subsets: ["latin"] });
const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });
const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2024 template",
  description: "Modern go to techstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full opacity-90">
      <body className={`font-satoshi overflow-hidden min-h-[100dvh] h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <div className={`${silkscreen.className}`}>
              <Header />
            </div>
            <div className=" flex-grow flex flex-col overflow-auto px-4">
              {children}
            </div>
            <div className="">
              <Footer />
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
