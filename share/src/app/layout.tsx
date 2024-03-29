import { Metadata } from "next";
import "./ui/globals.css";
import { lato } from '@/app/ui/fonts/fonts';
import Link from 'next/link';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Copyright from './footer/Copyright'; {/*for the Copyright in the footer*/}
import styles from './footer/footer.module.css'; {/*To style the footer*/}
import Image from 'next/image'; {/*For the logo in the navbar*/}
import logo from "../../public//toolshare-logo_transparent.png";
import Navigation from "./ui/navigation";

export const metadata: Metadata = {
  title: {
    template: '%s | Tools Share',
    default: 'Tools Share',
  },
  description: 'Tools Share is a place for community to share tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${lato.className}`}>
          <div className={styles.pageWrapper}>
            {/* Navigation Bar - Adjusted to include a logo */}
            <nav className={styles.navbarContainer}>
              <div className={styles.logoContainer}>
                <Link href="/">
                  <Image src={logo} alt="Tools ShareLogo" width={200} height={90} />
                </Link>
              </div>
              <Navigation></Navigation>
            </nav>
            {/* Page Content */}
            {children}
            {/* Footer */}
            <footer className={styles.footerContainer}>
              <div className={styles.footerLinks}>
                <Link href="/footer/terms">Terms and Conditions</Link>
                <Link href="/footer/privacy">Privacy Policy</Link>
                <Link href="/footer/faq">FAQs</Link>
              </div>
              <div>
                <Copyright />
              </div>
            </footer>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
