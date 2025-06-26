import Head from 'next/head';
import Link from 'next/link';

import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      
      {/* METADATI */}
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CONTENUTO PRINCIPALE */}
      <main>
        {/* Sezione “starter” */}
        <Header title="Un ce la fo più" />
        <p className="description">
          Qualche pagina pe' ripigliassi un po'
        </p>

        {/* Sezione “Benessere” */}
        <section className="section-spaced">
          <h1>Benvenuto nella tua app di benessere</h1>
          <p>
            <Link href="/programma">
              <a className="link-highlight">
                Vai al programma Energia &amp; Postura
              </a>
            </Link>
          </p>
        </section>

        {/* Sezione “About” */}
        <section>
          <h2>Home</h2>
          <Link href="/about">
            <a>Vai a About</a>
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
