import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arete',
  description: 'To live to ones fullest potential',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
