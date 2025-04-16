
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WMS Fiberlaser Calculator</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1 style={{ color: '#003d73' }}>Welkom bij de WMS Fiberlaser Snijkosten Calculator</h1>
        <p>Deze versie is volledig voorbereid voor Nederlandstalige weergave en correcte Vercel-deploy.</p>
        <p>Je kunt nu deze bestanden uploaden naar GitHub, waarna Vercel automatisch zal deployen.</p>
      </main>
    </div>
  );
}
