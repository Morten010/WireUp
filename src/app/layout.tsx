import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "sonner";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Wireup";
const APP_DEFAULT_TITLE = "Wireup - Database diagram builder";
const APP_TITLE_TEMPLATE = "%s - Wireup";
const APP_DESCRIPTION = "Databases made easy, create projects with tables and beautiful diagrams. Export it to code for easy development.";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
