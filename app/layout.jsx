import "./global.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Bilge Kılıç",
    description: "I'm a Mainframe System Specialist at Türkiye İş Bankası, where I play a crucial role in ensuring the smooth operation of critical systems",
    keywords: ["Bilge", "Bilge Kılıç"],
    openGraph: {
        title: "Bilge Kılıç",
        description: "I'm a Mainframe System Specialist at Türkiye İş Bankası, where I play a crucial role in ensuring the smooth operation of critical systems.",
        type: "website",
        locale: "en_US",
        siteName: "Bilge Kılıç",
    },
    icons: {
        icon: "/favicon.ico",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
