import Link from 'next/link';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Resume Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
