import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Librarian</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Librarian Introduction]</p>
        <p>(This is Website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
}
