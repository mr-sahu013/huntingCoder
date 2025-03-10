import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  // console.log(styles)
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="nextjs, huntingcoder blog, hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}

      <main className={styles.main}>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
          <img
            className={styles.myImg}
            src="\coderimg.jpg"
            width={237}
            height={158}
            alt="hunting coder"
          />
        </div>
        <h1 className={styles.title}>
          <span className="dummy">&lt;HuntingCoder/&gt;</span>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
