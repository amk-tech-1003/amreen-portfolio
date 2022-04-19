import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Amreen Khan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Helloooo..! I'm Amreen Khan" />
        <p className="description">
          Thanks for clicking the link: <code>just to track</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
