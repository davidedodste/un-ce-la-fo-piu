import Head from 'next/head';
import Link from 'next/link';

import Header from '@components/Header';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

export default function Home() {
  return (
    <div className="container" style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
      <NavBar />
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
        <section style={{ margin: '40px 0' }}>
          <h1>Benvenuto nella tua app di benessere</h1>
          <p>
            <Link href="/programma">
              <a style={{ color: '#2e8b57', fontWeight: 'bold' }}>
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
