"use client";

import React from "react";
import { Header } from "../nav/header";
import { Footer } from "../nav/footer";
import { ThemeProvider } from "../theme-provider";
import { useTina } from "tinacms/dist/react";

export const Layout = ({
  rawData,
  children,
}: {
  rawData?: any;
  children: React.ReactNode;
}) => {
  const { data: tinaData } = useTina({
    query: rawData?.query,
    variables: rawData?.variables,
    data: rawData,
  }) || { data: null };

  const globalTheme = tinaData?.global?.theme?.darkMode || 'system';

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      value={{
        light: "light",
        dark: "dark",
        system: "system",
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;