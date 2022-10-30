import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Great things cooming soon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Great things cooming soon!" />
        <p className="description">
          Stay tune
        </p>
      </main>
    </div>
  )
}
