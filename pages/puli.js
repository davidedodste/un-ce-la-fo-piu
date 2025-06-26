import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { puliItinerary } from './puliItinerary'; // Assumendo che il file dati sia separato

export default function PuliFamilyProgram() {
  const [selectedDay, setSelectedDay] = useState(0);

  const day = puliItinerary[selectedDay];

  return (
    <div className="container">
      <Head>
        <title>Vacanza a Puli – Itinerario Famiglia</title>
        <meta
          name="description"
          content="Programma di 7 giorni per famiglie con bambini: Puli, Sun Moon Lake, Taichung e dintorni."
        />
      </Head>

      <header>
        <h1 className="title">Vacanza a Puli – Itinerario Famiglia</h1>
        <p className="subtitle">Seleziona un giorno per vedere le attività e i dettagli.</p>
      </header>

      <nav className="days-nav">
        {puliItinerary.map((d, i) => (
          <button
            key={i}
            className={`day-button ${selectedDay === i ? 'selected' : ''}`}
            onClick={() => setSelectedDay(i)}
            aria-pressed={selectedDay === i}
          >
            {d.day}
          </button>
        ))}
      </nav>

      <main>
        <section className="day-details">
          <h2>
            {day.day} – {day.title}
          </h2>
          <ul>
            {day.activities.map((act, idx) => (
              <li key={idx} className="activity-item">
                {act.desc}
                {act.map && (
                  <a
                    href={act.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                    aria-label={`Apri ${act.desc} su Google Maps`}
                  >
                    📍
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="guide-section">
          <h2>Guida dettagliata attrazioni & attrezzature consigliate</h2>
          <Link href="/puli-details">
            <a className="link-highlight">📖 Vai alla guida dettagliata</a>
          </Link>
        </section>
      </main>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .title {
          font-size: 2.4rem;
          font-weight: 700;
          color: #0070f3;
          margin-bottom: 0.25rem;
        }
        .subtitle {
          font-size: 1.1rem;
          color: #555;
        }
        .days-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .day-button {
          background-color: #eee;
          border: 2px solid transparent;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, border-color 0.3s;
          user-select: none;
          min-width: 90px;
          text-align: center;
        }
        .day-button:hover,
        .day-button:focus {
          background-color: #d0eaff;
          outline: none;
          border-color: #0070f3;
        }
        .selected {
          background-color: #0070f3;
          color: white;
          border-color: #005bb5;
          cursor: default;
        }
        main {
          background: #f9f9f9;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
        }
        .day-details h2,
        .guide-section h2 {
          color: #0070f3;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 2rem;
        }
        .activity-item {
          background: white;
          margin-bottom: 0.8rem;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1rem;
        }
        .map-link {
          font-size: 1.3rem;
          margin-left: 1rem;
          color: #0070f3;
          transition: color 0.3s;
        }
        .map-link:hover {
          color: #005bb5;
        }
        .link-highlight {
          font-weight: 600;
          color: #0070f3;
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.3s;
        }
        .link-highlight:hover {
          color: #005bb5;
        }
      `}</style>
    </div>
  );
}
