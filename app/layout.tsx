import type { Metadata } from "next";
import { Inter, Silkscreen, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

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
    <html lang="en" className="h-full">
      <body
        className={`${silkscreen.className} bg-green-300 overflow-hidden border-4 border-blue-500 min-h-[100dvh] h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <div className="border-4 border-red-400">
              <Header />
            </div>
            <div className="border-4 border-purple-500 flex-grow flex flex-col overflow-auto">
              {children}
            </div>
            <div className="border-4 border-pink-500">
              <Footer />
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
