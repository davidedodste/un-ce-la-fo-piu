import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

// pages/programma.js
import Link from 'next/link';
import { useState } from 'react';

const program = [
  {
    day: "Giorno 1",
    title: "Qi Gong + Stretching collo e spalle (10-15 min)",
    exercises: [
      {desc: "Posizione eretta rilassata (2 min): piedi alla larghezza spalle, respira lentamente."},
      {desc: "Sollevare le mani (10 ripetizioni): inspira sollevando le mani davanti al petto, espira abbassandole.",
       video: "https://www.youtube.com/watch?v=jMuHgj3FF_k"},
      {desc: "Abbracciare l’albero (2 min): mani davanti al corpo come se abbracciassi un tronco, muovi dolcemente avanti e indietro."},
      {desc: "Stretching collo: inclina lentamente la testa a destra e sinistra, avanti e indietro (10 volte per direzione)."},
      {desc: "Rotazioni spalle: fai rotazioni lente in avanti e indietro (10 volte ciascuna)."}
    ]
  },
  {
    day: "Giorno 2",
    title: "Passeggiata + Respirazione profonda (20 min)",
    exercises: [
      {desc: "Cammina a passo tranquillo, concentrandoti sul respiro."},
      {desc: "Inspira contando fino a 4, espira contando fino a 6."},
      {desc: "Ogni 5 minuti, rallenta e fai qualche rotazione del busto e spalle."}
    ],
    video: "https://www.youtube.com/watch?v=J0dc2p1U5TU"
  },
  {
    day: "Giorno 3",
    title: "Tai Chi principianti (15 min)",
    exercises: [
      {desc: "Posizione di partenza: piedi alla larghezza spalle, ginocchia morbide (2 min)."},
      {desc: "Passo avanti lento (10 volte): sposta peso sul piede sinistro, fai un passo avanti con il destro lentamente.",
       video: "https://www.youtube.com/watch?v=cEOS2zoyQw4"},
      {desc: "Spingere le mani (10 ripetizioni): palmi davanti al petto, spingi una mano avanti mentre l’altra segue."},
      {desc: "Passo laterale (10 volte per lato): sposta peso su un piede e fai un passo laterale mantenendo corpo rilassato."},
      {desc: "Respiro consapevole: termina respirando profondamente per 2 minuti."}
    ]
  },
  {
    day: "Giorno 4",
    title: "Riposo o attività leggera",
    exercises: [
      {desc: "Fai qualche camminata leggera o riposo attivo."},
      {desc: "Puoi fare qualche esercizio di stretching se ti senti teso."}
    ]
  },
  {
    day: "Giorno 5",
    title: "Yoga dolce (15-20 min)",
    exercises: [
      {desc: "Posizione del bambino (Balasana): 2 min.",
       video: "https://www.youtube.com/watch?v=4C-gxOE0j7s"},
      {desc: "Gatto-mucca: 10 ripetizioni, respira sincronizzando il movimento.",
       video: "https://www.youtube.com/watch?v=kqnua4rHVVA"},
      {desc: "Cane a testa in giù: mantieni 20-30 secondi.",
       video: "https://www.youtube.com/watch?v=1Jzr6K-p9XE"},
      {desc: "Guerriero I: 30 secondi per lato.",
       video: "https://www.youtube.com/watch?v=v7AYKMP6rOE&t=344s"},
      {desc: "Respirazione profonda seduta: 3-5 minuti per rilassarti."}
    ]
  },
  {
    day: "Giorno 6",
    title: "Passeggiata + Stretching gambe e schiena (20 min)",
    exercises: [
      {desc: "Cammina 10 minuti."},
      {desc: "Stretching: piegati lentamente in avanti per allungare la schiena e le gambe, mantieni 20 secondi."},
      {desc: "Esegui allungamenti laterali con braccia sopra la testa (10 volte per lato)."}
    ]
  },
  {
    day: "Giorno 7",
    title: "Riposo attivo o attività libera",
    exercises: [
      {desc: "Puoi fare una breve passeggiata o qualche esercizio leggero."},
      {desc: "Rilassati e ascolta il tuo corpo."}
    ]
  }
]

export default function Programma() {
  const [selectedDay, setSelectedDay] = useState(0)

  return (
    <div className="container" style={{maxWidth: '700px', margin: 'auto', padding: '20px'}}>
      <Head>
        <title>Programma Energia & Postura</title>
        <meta name="description" content="Programma settimanale semplice per aumentare energia e migliorare postura" />
      </Head>

      <h1 style={{textAlign: 'center', color: '#2e8b57'}}>Programma Energia & Postura</h1>
      <p style={{textAlign: 'center'}}>
        Scegli un giorno per vedere gli esercizi e i video consigliati.
      </p>

      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '20px'}}>
        {program.map((day, i) => (
          <button
            key={i}
            onClick={() => setSelectedDay(i)}
            style={{
              padding: '8px 14px',
              borderRadius: '5px',
              border: selectedDay === i ? 'none' : '2px solid #2e8b57',
              backgroundColor: selectedDay === i ? '#2e8b57' : '#e0f0e9',
              color: selectedDay === i ? 'white' : '#2e8b57',
              cursor: 'pointer',
              minWidth: '60px'
            }}
          >
            {day.day}
          </button>
        ))}
      </div>

      <section style={{
        background: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 6px rgba(46,139,87,0.2)'
      }}>
        <h2>{program[selectedDay].day} – {program[selectedDay].title}</h2>
        <ul>
          {program[selectedDay].exercises.map((ex, i) => (
            <li key={i} style={{marginBottom: '10px'}}>
              {ex.desc}
              {ex.video && (
                <div>
                  <a
                    href={ex.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#2e8b57', fontWeight: 'bold', textDecoration: 'none'}}
                  >
                    ▶️ Video esercizio
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Video guida generale, se presente e non duplicato */}
        {program[selectedDay].video && !program[selectedDay].exercises.some(e => e.video === program[selectedDay].video) && (
          <p>
            <a
              href={program[selectedDay].video}
              target="_blank"
              rel="noopener noreferrer"
              style={{color: '#2e8b57', fontWeight: 'bold', textDecoration: 'none'}}
            >
              ▶️ Video guida generale
            </a>
          </p>
        )}
      </section>

      <footer style={{textAlign: 'center', marginTop: '40px', color: '#666'}}>
        Muoviti con gradualità, respira profondamente e ascolta il tuo corpo. Buona pratica!
      </footer>
    </div>
  )
}
