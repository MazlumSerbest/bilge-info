import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import * as Icon from "react-feather";

export const siteTitle = "Bilge Kılıç";
const name = "Bilge Kılıç";
const linkedInUrl = "https://www.linkedin.com/in/bilge-kılıç-574890107";
const mail = "bbilgekilic@gmail.com"

export default function Layout({ children, home }) {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Information About Bilge Kılıç"
                    />
                    <meta name="og:title" content={siteTitle} />
                </Head>
                <header className={styles.header}>
                    <section className={styles.headerCard}>
                        
                    {home ? (
                        <>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt=""
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) :
                        (
                            <>
                                <Link href="/" >
                                    <Image
                                        priority
                                        src="/images/profile.jpg"
                                        className={utilStyles.borderCircle}
                                        height={108}
                                        width={108}
                                        alt=""
                                    />
                                </Link>
                                <h2 className={utilStyles.headingLg}>
                                    <Link href="/" className={utilStyles.colorInherit}>
                                        {name}
                                    </Link>
                                </h2>
                            </>
                        )}
                    <section className={styles.linkSection}>
                        <a href={"mailto:" + mail} className={utilStyles.link}>
                            <Icon.Mail className={utilStyles.linkIcon}></Icon.Mail>
                            <span className={utilStyles.linkText}>{mail}</span>
                        </a>
                        <a href={linkedInUrl} className={utilStyles.link}>
                            <Icon.Linkedin className={utilStyles.linkIcon}></Icon.Linkedin>
                            <span className={utilStyles.linkText}>linkedin.com/in/bilge-kılıç-574890107</span>
                        </a>
                    </section>
                    </section>
                </header>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">← Back to home</Link>
                    </div>
                )}
            </div>
        </>
    )
}