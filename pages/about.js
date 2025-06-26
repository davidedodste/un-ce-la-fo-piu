// pages/about.js
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Us</title>
      </Head>

      <main>
        <Header title="About Us" />
        <p>Questa è la pagina About.</p>
      </main>

      <Footer />
    </div>
  )
}
