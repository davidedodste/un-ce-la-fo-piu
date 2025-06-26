import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Pagina Next.js – Programma settimanale "Vacanza a Puli" (famiglie con bambini)
 * Include: itinerario giorno‑per‑giorno + guida dettagliata attrazioni con attrezzature consigliate.
 * Riutilizza le classi CSS globali (container, title, subtitle, buttons-container,
 * day-button, selected, program-section, exercise-item, link-highlight, ecc.).
 */

export default function PuliFamilyProgram() {
  // Itinerario giorno‑per‑giorno con link Maps
  const itinerary = [
    {
      day: 'Giorno 1',
      title: 'Arrivo & King Garden',
      activities: [
        {
          desc: 'Hotel Chengpao – check‑in e riposo',
          map: 'https://www.google.com/maps?q=Hotel+Chengpao+Puli',
        },
        {
          desc: 'Visita a King Garden (Carton King)',
          map: 'https://www.google.com/maps?q=Carton+King+Puli',
        },
        {
          desc: 'Cena al Mr. 鍋物 (hotpot)',
          map: 'https://www.google.com/maps?q=Mr.%20鍋物%20Puli',
        },
      ],
    },
    {
      day: 'Giorno 2',
      title: 'Parco acquatico di Shuili',
      activities: [
        {
          desc: 'Giochi d’acqua al Parco sul fiume di Shuili',
          map: 'https://www.google.com/maps?q=Shuili+Water+Park',
        },
        {
          desc: "Shuili Farmer's Market Café (pranzo)",
          map: 'https://www.google.com/maps?q=Shuili+Farmers+Market+Cafe',
        },
      ],
    },
    {
      day: 'Giorno 3',
      title: 'Sun Moon Lake + Funivia',
      activities: [
        {
          desc: 'Giro in battello sul Sun Moon Lake',
          map: 'https://www.google.com/maps?q=Sun+Moon+Lake',
        },
        {
          desc: 'Funivia panoramica Sun Moon Lake',
          map: 'https://www.google.com/maps?q=Sun+Moon+Lake+Ropeway',
        },
        {
          desc: 'Formosan Aboriginal Culture Village (opzionale)',
          map: 'https://www.google.com/maps?q=Formosan+Aboriginal+Culture+Village',
        },
      ],
    },
    {
      day: 'Giorno 4',
      title: 'Qingjing Farm',
      activities: [
        {
          desc: 'Intera giornata a Qingjing Farm (Sheep Show, pony, picnic)',
          map: 'https://www.google.com/maps?q=Qingjing+Farm',
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
        },
        {
          desc: 'Taichung Metropolitan Park',
          map: 'https://www.google.com/maps?q=Taichung+Metropolitan+Park',
        },
        {
          desc: 'Miyahara Dessert House (opzionale)',
          map: 'https://www.google.com/maps?q=Miyahara+Taichung',
        },
      ],
    },
    {
      day: 'Giorno 6',
      title: 'Fuxing Hot Spring Park',
      activities: [
        {
          desc: 'Fuxing Hot Spring Park (giochi & pediluvio)',
          map: 'https://www.google.com/maps?q=Fuxing+Hot+Spring+Park',
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
          desc: 'Checheng Old Street & stazione in stile giapponese',
          map: 'https://www.google.com/maps?q=Checheng+Old+Street',
        },
      ],
    },
  ];

  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="container">
      <Head>
        <title>Vacanza a Puli – Itinerario Famiglia</title>
        <meta
          name="description"
          content="Programma di 7 giorni per famiglie con bambini: Puli, Sun Moon Lake, Taichung e dintorni."
        />
      </Head>

      <h1 className="title">Programma Vacanza a Puli (Famiglie)</h1>
      <p className="subtitle">Seleziona un giorno per vedere le attività.</p>

      {/* Pulsanti giorni */}
      <div className="buttons-container">
        {itinerary.map((d, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDay(idx)}
            className={`day-button ${selectedDay === idx ? 'selected' : ''}`}
          >
            {d.day}
          </button>
        ))}
      </div>

      {/* Dettaglio giorno */}
      <section className="program-section">
        <h2>
          {itinerary[selectedDay].day} – {itinerary[selectedDay].title}
        </h2>
        <ul>
          {itinerary[selectedDay].activities.map((act, i) => (
            <li key={i} className="exercise-item">
              {act.desc}
              {act.map && (
                <span>
                  {' '}
                  <a
                    href={act.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-highlight"
                  >
                    📍 Apri in Maps
                  </a>
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* TODO: Guida dettagliata da integrare qui con tutte le attrazioni e riepilogo attrezzature */}
      {/* Guida completata da integrare qui */}

    </div>
  );
}
