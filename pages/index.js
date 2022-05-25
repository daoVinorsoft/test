import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Profile from "../components/Profile";
import Teams from "../components/Teams";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Send from "../components/Send";
import styles from "../styles/Home.module.css";
import Customer from "../components/Customer";
import Slides from "../components/Slides";
import Slides2 from "../components/Slides2";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Header />
        <Slides />
        <main className='l-main'>
          <Intro />
          <About />
          <Products />
          <Profile />
          <Customer />
          <Contact />
          <Map />
          <Send />
        </main>
        <Slides2 />
        <a href='#' className='scrolltop' id='scroll-top'>
          <i className='bx bx-up-arrow-alt scrolltop__icon'></i>
        </a>

        <Footer />
      </body>
    </div>
  );
}