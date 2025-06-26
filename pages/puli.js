import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { puliItinerary, equipmentSummary } from '../data/puliItinerary';

export default function PuliFamilyProgram() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [expandedActivities, setExpandedActivities] = useState({});

  // Toggle visibilità dettagli per un’attività specifica
  const toggleDetails = (dayIdx, actIdx) => {
    const key = `${dayIdx}-${actIdx}`;
    setExpandedActivities(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="container">
      <Head>
        <title>Vacanza a Puli – Itinerario Famiglia</title>
        <meta
          name="description"
          content="Programma di 7 giorni per famiglie con bambini: Puli, Sun Moon Lake, Taichung e dintorni."
        />
      </Head>

      <h1 className="title">Programma Vacanza a Puli (Famiglie)</h1>
      <p className="subtitle">Seleziona un giorno per vedere le attività.</p>

      {/* Pulsanti giorni */}
      <div className="buttons-container">
        {puliItinerary.map((d, idx) => (
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
          {puliItinerary[selectedDay].day} – {puliItinerary[selectedDay].title}
        </h2>
        <ul>
          {puliItinerary[selectedDay].activities.map((act, i) => {
            const key = `${selectedDay}-${i}`;
            const isExpanded = expandedActivities[key];
            return (
              <li key={i} className="exercise-item">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{act.desc}</span>
                  {act.details && (
                    <button
                      onClick={() => toggleDetails(selectedDay, i)}
                      style={{
                        marginLeft: '10px',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        color: '#0070f3',
                        textDecoration: 'underline',
                        padding: 0,
                      }}
                      aria-expanded={isExpanded}
                      aria-controls={`details-${key}`}
                    >
                      {isExpanded ? 'Nascondi dettagli ▲' : 'Mostra dettagli ▼'}
                    </button>
                  )}
                </div>

                {act.map && (
                  <div>
                    <a
                      href={act.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-highlight"
                    >
                      📍 Apri in Maps
                    </a>
                  </div>
                )}

                {isExpanded && act.details && (
                  <div
                    id={`details-${key}`}
                    style={{
                      marginTop: '8px',
                      padding: '8px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      lineHeight: '1.3',
                    }}
                  >
                    {act.details.description && <p><strong>Descrizione:</strong> {act.details.description}</p>}
                    {act.details.familyTips && <p><strong>Consigli per famiglie:</strong> {act.details.familyTips}</p>}
                    {act.details.equipment && <p><strong>Attrezzatura consigliata:</strong> {act.details.equipment}</p>}
                    {act.details.advice && <p><em>{act.details.advice}</em></p>}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Sezione riepilogo attrezzature */}
      <section className="program-section">
        <h2>Attrezzature consigliate per tutta la vacanza</h2>
        <ul>
          {equipmentSummary.map((item, idx) => (
            <li key={idx} className="exercise-item">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Link alla guida dettagliata (puoi rimuoverlo se vuoi) */}
      <section className="program-section">
        <Link href="/puli-details">
          <a className="link-highlight">📖 Vai alla guida dettagliata</a>
        </Link>
      </section>
    </div>
  );
}
