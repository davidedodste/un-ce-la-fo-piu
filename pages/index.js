import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Benvenuto nella tua app di benessere</h1>
      <p>
        <Link href="/programma">
          <a style={{ color: '#2e8b57', fontWeight: 'bold' }}>Vai al programma Energia & Postura</a>
        </Link>
      </p>
    </div>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>Vai a About</a>
      </Link>
    </div>
  )
}
