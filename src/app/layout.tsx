import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WireUp",
  description: "Create and plan projects easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
          {children}
          <Toaster 
          richColors
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
