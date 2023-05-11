import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tutorial",
  description: "la prueba de mi next",
};

const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              {links.map(({label, route}) => <li key={route}> <Link href={route}>{label}</Link></li> )}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
