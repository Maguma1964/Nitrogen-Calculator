
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WMS Fiberlaser Snijkosten Calculator</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#003d73' }}>Welkom bij de WMS Fiberlaser Snijkosten Calculator</h1>
        <p>Deze pagina is volledig in het Nederlands en correct gekoppeld aan jouw Vercel-project.</p>
        <ul>
          <li>✅ Laservermogen-keuze (binnenkort)</li>
          <li>✅ Materiaaltype en dikte</li>
          <li>✅ Export naar PDF en e-mailoptie</li>
        </ul>
        <p>Je bent live op <strong>calculator.wmsmachinery.nl</strong> zodra je dit project uploadt.</p>
      </main>
    </div>
  );
}
