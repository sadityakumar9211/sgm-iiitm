import Head from "next/head";
import FirstSection from "../components/sections/FirstSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";
import FourthSection from "../components/sections/FourthSection";
import FifthSection from "../components/sections/FifthSection";
import SixthSection from "../components/sections/SixthSection";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-primary-bg">
      <Head>
        <title>Student Gyan Movement - SGM</title>
        <meta
          name="An educational initiative taken by the stuents of ABV-IIITM Gwalior"
          content="Student Gyan Movement - SGM"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}
