import Head from 'next/head';
import Link from 'next/link';

/**
 * Pagina guida dettagliata: attrazioni e attrezzature consigliate per famiglie con bambini piccoli (0–8 anni).
 */

export default function PuliDetails() {
  return (
    <div className="container">
      <Head>
        <title>Guida Dettagliata – Puli e dintorni</title>
        <meta name="description" content="Informazioni utili su attrazioni e attrezzature per famiglie in vacanza a Puli, Sun Moon Lake e Taichung." />
      </Head>

      <h1 className="title">Guida Attrazioni & Attrezzature</h1>
      <p className="subtitle">Informazioni pratiche per famiglie con bambini (0–8 anni)</p>

      <section className="program-section">
        <h2>🏨 Hotel Chengpao</h2>
        <ul>
          <li>Camere familiari, piscine interne/esterne, spa, ristoranti.</li>
          <li>Utile per relax post‑giornata, piscina baby sorvegliata.</li>
          <li><strong>Attrezzature:</strong> costume extra, asciugamani, ciabatte antiscivolo.</li>
        </ul>

        <h2>🎡 King Garden (Carton King)</h2>
        <ul>
          <li>Parco con installazioni e ristorante tutto in cartone.</li>
          <li>Bambini amano sculture, giochi tattili e gelati.</li>
          <li><strong>Attrezzature:</strong> vestiti comodi, fazzoletti, cambio leggero.</li>
        </ul>

        <h2>💦 Shuili Water Park</h2>
        <ul>
          <li>Giochi d’acqua e "water kingdom" naturale. Aperto 24h.</li>
          <li>Fontane spray, giochi estivi con arcobaleni d’acqua.</li>
          <li><strong>Attrezzature:</strong> costume, asciugamano, scarpe da scoglio, crema solare.</li>
        </ul>

        <h2>🌿 Nenggao Water Park</h2>
        <ul>
          <li>Piscine naturali, scivoli in pietra, cascatelle basse.</li>
          <li>Aperto maggio–settembre, 09:00–17:00 (chiuso martedì e mercoledì).</li>
          <li><strong>Attrezzature:</strong> scarpe da bagnare, costume, snack, borraccia, protezione solare.</li>
        </ul>

        <h2>🛥️ Sun Moon Lake + Funivia</h2>
        <ul>
          <li>Battelli 8:00–17:30 ogni 15–30 minuti, funivia panoramica 10:30–16:00.</li>
          <li>Vista spettacolare, cabine per famiglie.</li>
          <li><strong>Attrezzature:</strong> zainetto leggero, felpa, snack, occhiali da sole.</li>
        </ul>

        <h2>🐑 Qingjing Farm</h2>
        <ul>
          <li>Fattoria a 1750 m con pecore, pony, giardini e trekking facile.</li>
          <li>Sheep Shearing Show molto amato dai bambini.</li>
          <li><strong>Attrezzature:</strong> scarpe trekking, felpa, borraccia, crema solare.</li>
        </ul>

        <h2>🧬 Museo di Scienze Naturali (Taichung)</h2>
        <ul>
          <li>Discovery Room (3–8 anni), Dinosauri, IMAX, Giardini Botanici.</li>
          <li>Ingresso gratuito sotto i 110 cm, chiuso lunedì.</li>
          <li><strong>Attrezzature:</strong> snack, felpa (aria condizionata), acqua.</li>
        </ul>

        <h2>🌲 Taichung Metropolitan / Taichung Park</h2>
        <ul>
          <li>Grandi aree verdi, giochi, pedalò, relax post‑museo.</li>
          <li><strong>Attrezzature:</strong> scarpe comode, repellente, borraccia, impermeabile.</li>
        </ul>

        <h2>🏞️ Fuxing Hot Spring Park</h2>
        <ul>
          <li>Parco avventura con pediluvio termale, zip-line, sabbiera.</li>
          <li>Aperto 09:00–18:00, chiuso martedì e mercoledì.</li>
          <li><strong>Attrezzature:</strong> asciugamano, costume, scarpe bagnabili, crema solare.</li>
        </ul>

        <h2>🚂 Checheng Old Street</h2>
        <ul>
          <li>Stazione storica, trenini, artigianato e street food.</li>
          <li>Giro su trenino, atmosfera vintage per bambini.</li>
          <li><strong>Attrezzature:</strong> fazzoletti, acqua, monete per snack/trenino.</li>
        </ul>

        <h2>📌 Riepilogo attrezzature consigliate</h2>
        <ul>
          <li>Scarpe comode o da trekking</li>
          <li>Scarpe da scoglio o bagnabili</li>
          <li>Costume da bagno, asciugamani</li>
          <li>Zaino leggero, snack, borraccia</li>
          <li>Felpa o giacca leggera (musei, montagna)</li>
          <li>Crema solare, repellente, cappellino</li>
        </ul>

        <p>
          <Link href="/puli">
            <a className="link-highlight">⬅ Torna al programma</a>
          </Link>
        </p>
      </section>
    </div>
  );
}
