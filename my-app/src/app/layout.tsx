import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import React from 'react';

export const metadata = {
  title: 'Banyans Kailua',
  description: 'Banyans Craft Kitchen + Lounge React Page',
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
