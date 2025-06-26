// =============================
// puliItinerary.js
// =============================

// 👉  Esportazioni **solo nominate** (niente export default)
//     così Next.js non fa confusione negli import

export const puliItinerary = [
  {
    day: 'Giorno 1',
    title: 'Arrivo & King Garden',
    activities: [
      {
        desc: 'Hotel Chengpao – check‑in e riposo',
        map: 'https://www.google.com/maps?q=Hotel+Chengpao+Puli',
        details: {
          description: 'Camere familiari, piscine interne ed esterne, spa, ristoranti interni.',
          familyTips: 'Ottimo relax post‑giornata, piscina per bambini sotto sorveglianza.',
          equipment: 'Costume extra, asciugamani, ciabattine antiscivolo',
        },
      },
      {
        desc: 'Visita a King Garden (大黑松小倆口)',
        map: 'https://maps.app.goo.gl/c19wqDDMReDHBNhF9',
        details: {
          description: 'Parco/castello e ristorante tutto in cartone.',
          familyTips: 'Sculture tattili, minisale gioco e gelati.',
          equipment: 'Vestiti comodi, fazzoletti, cambio leggero',
        },
      },
    ],
  },
  {
    day: 'Giorno 2',
    title: 'Parco acquatico di Shuili (水里親水公園)',
    activities: [
      {
        desc: 'Giochi d’acqua al Parco sul fiume di Shuili',
        map: 'https://maps.app.goo.gl/HoFhtQRopX36yd539',
        details: {
          description: 'Giochi d’acqua, fontane, "water kingdom" naturale lungo il fiume. Aperto 24h.',
          familyTips: 'Fontane che schizzano, arcobaleni d’acqua in estate.',
          equipment: 'Costume da bagno, asciugamano, scarpe da scoglio, cremina solare, acqua',
          advice: 'Meglio visitare tra luglio e agosto per spettacoli d’acqua regolari.',
        },
      },
    ],
  },
  {
    day: 'Giorno 3',
    title: 'Sun Moon Lake + Funivia',
    activities: [
      {
        desc: 'Giro in battello sul Sun Moon Lake',
        map: 'https://www.google.com/maps?q=Sun+Moon+Lake',
        details: {
          description: 'Battelli regolari 8:00–17:30, €1‑2, parti ogni 15‑30 min.',
          familyTips: 'Adatto ai bambini, cabine panoramiche con vista mozzafiato.',
          equipment: 'Zaini leggeri, acqua, snack, felpa (alta quota), occhiali da sole',
        },
      },
      {
        desc: 'Funivia panoramica Sun Moon Lake',
        map: 'https://www.google.com/maps?q=Sun+Moon+Lake+Ropeway',
        details: {
          description: 'Funivia 1877 m, 6.8 min, aperta 10:30–16:00 (festivi fino 16:30), costo 300 NT$ A/R.',
          familyTips: 'Cabine panoramiche, vista mozzafiato.',
          equipment: 'Felpa, acqua, snack',
        },
      },
      {
        desc: 'Formosan Aboriginal Culture Village (opzionale)',
        map: 'https://www.google.com/maps?q=Formosan+Aboriginal+Culture+Village',
      },
    ],
  },
  {
    day: 'Giorno 4',
    title: 'Qingjing Farm',
    activities: [
      {
        desc: 'Intera giornata a Qingjing Farm (Sheep Show, pony, picnic)',
        map: 'https://www.google.com/maps?q=Qingjing+Farm',
        details: {
          description: 'Fattoria alpina a 1750 m, con Sheep Shearing Show, pony, giardini e sentieri.',
          familyTips: 'Toccare pecore, facile trekking, passeggiate panoramiche.',
          equipment: 'Scarpe comode/trekking, felpa/giacca, snack, borraccia, berretto, crema solare',
        },
      },
    ],
  },
  {
    day: 'Giorno 5',
    title: 'Taichung: Museo & Parco',
    activities: [
      {
        desc: 'National Museum of Natural Science',
        map: 'https://www.google.com/maps?q=National+Museum+of+Natural+Science+Taichung',
        details: {
          description: 'Orari 9:00–17:00, chiuso lunedì; ingresso bambini <110 cm gratis.',
          familyTips: 'Discovery Room per 3–8 anni, dinosauri, planetario, interattività.',
          equipment: 'Snack, borraccia, felpa (per aria condizionata), vestiti comodi',
        },
      },
      {
        desc: 'Taichung Metropolitan Park',
        map: 'https://www.google.com/maps?q=Taichung+Metropolitan+Park',
        details: {
          description: 'Grandi parchi con giochi, laghetti, pedalò.',
          familyTips: 'Area verde ampia, ideale dopo il museo.',
          equipment: 'Scarpe comode, repellente, borraccia, impermeabile',
        },
      },
    ],
  },
  {
    day: 'Giorno 6',
    title: 'Fuxing Hot Spring Park',
    activities: [
      {
        desc: 'Fuxing Hot Spring Park (giochi & pediluvio)',
        map: 'https://www.google.com/maps?q=Fuxing+Hot+Spring+Park',
        details: {
          description: 'Parco d’avventura parent-child con zip-line, pediluvio termale, sabbiera e giochi d’acqua.',
          familyTips: 'Giochi naturali e relax per genitori.',
          equipment: 'Costume o pediluvio, scarpe da bagnare, asciugamano, snack, crema solare',
        },
      },
      {
        desc: 'Puli Public Pool (opzione indoor in caso di pioggia)',
        map: 'https://www.google.com/maps?q=Puli+Public+Pool',
      },
    ],
  },
  {
    day: 'Giorno 7',
    title: 'Checheng & rientro',
    activities: [
      {
        desc: 'Checheng Old Street & stazione in stile giapponese',
        map: 'https://www.google.com/maps?q=Checheng+Old+Street',
        details: {
          description: 'Stazione storica giapponese con trenini in miniatura, street food e artigianato.',
          familyTips: 'Breve giro in trenino, cibo facile, atmosfera nostalgica.',
          equipment: 'Fazzoletti, acqua, monete per trenino/snack',
        },
      },
    ],
  },
];

// Riepilogo attrezzature generali per tutta la vacanza
export const equipmentSummary = [
  'Scarpe comode e/o da trekking, scarpe da bagnare',
  'Costumi da bagno, asciugamani, felpa leggera',
  'Borraccia, snack, crema solare e repellente',
  'Zainetto leggero per escursioni',
  'Felpa extra (funivia, alta quota, musei)',
];

// =============================
// Puli.js  (pagina Next.js – client component)
// =============================

'use client';

import Head from 'next/head';
import { useState } from 'react';
import { puliItinerary } from './puliItinerary';

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
        .day-details h2 {
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
      `}</style>
    </div>
  );
}
