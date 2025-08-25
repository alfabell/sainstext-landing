'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"          // <html class="dark"> ... </html>
      defaultTheme="system"      // ikut OS
      enableSystem
      disableTransitionOnChange  // biar gak flicker 
    >
      {children}
    </ThemeProvider>
  );
}
