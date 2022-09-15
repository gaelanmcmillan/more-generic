import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaelan McMillan</title>
        <meta name="a blog about programming" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sure is nice to be <a href="https://en.wikipedia.org/wiki/Generic_programming">generic</a>.
        </h1>

        <p className={styles.description}>
          A blog about programming.
        </p>
        
        <div className={styles.grid}> {/* Blog Posts */}
          <a
            href="link to blog post"
            className={styles.card}
          >
            <h2>[More Generic] Patience</h2>
            <p>
              What do increasing subsequences and stacking boxes have in common?
            </p>
          </a>
        </div> {/* end of blog posts */}

      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/gaelanmcmillan">
          <h1>by Gaelan McMillan</h1>
        </a>
      </footer>
    </div>
  )
}
