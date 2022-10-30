import Head from 'next/head'
import Header from '@components/Header'
// import bg from './wp.jpg';

export default function Home() {
  return (
    <div className="container" style={{
      backgroundImage: `url(/wp.jpg)`
    }}>
      <Head>
        <title>Our Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Our wedding" />
        <p className="description">
          Great things cooming soon! Stay tune
        </p>
      </main>
    </div>
  )
}
