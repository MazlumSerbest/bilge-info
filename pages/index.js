import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import * as Icon from "react-feather";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>👋 Hello! I'm <strong>Bilge</strong>, an experienced professional in the tech industry.</p>
        <p>🚀 I started my journey with internships at Aselsan, Koçsistem, and Çözümevi Consulting during my time as an Electrics and Electronics Engineering student at Bilkent University.</p>
        <p>💼 After graduating, I served as a Junior Dev at Improva, where I contributed to exciting projects and expanded my technical expertise.</p>
        <p>🏢 Currently, I'm a Mainframe System Specialist at Türkiye İş Bankası, where I play a crucial role in ensuring the smooth operation of critical systems.</p>
        <p>🌐 Fluent in Turkish and English, I enjoy bridging cultures and collaborating with diverse teams.</p>
        <p>🧘‍♀️ When I'm not immersed in the tech world, I find tranquility through yoga. My aspiration is to become a yoga instructor one day and share the benefits of this practice with others.</p>
        <p>📩 Let's connect! I'm open to networking and exploring new opportunities in the tech industry and the world of yoga.</p>
      </section>
      <section className={utilStyles.heartSection}>
        <Icon.Heart></Icon.Heart>
      </section>
    </Layout>
  )
}
