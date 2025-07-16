import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import { useEffect, useState } from 'react';

const allenamenti = {
  1: {
    intro: `Frequenza consigliata: 3 volte a settimana (es. lunedì – mercoledì – venerdì)<br>
            Durata totale: 10–12 minuti<br>
            Schema: 30 secondi esercizio / 30 secondi pausa – Ripeti il circuito 2 volte`,
    video: "https://www.youtube.com/watch?v=UBMk30rjy0o",
    esercizi: [
      {
        title: "1. Marcia sul posto",
        description: "Marcia con le ginocchia sollevate e braccia attive.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/marching-in-place-exercise-illustration.jpg"
      },
      {
        title: "2. Squat",
        description: "Scendi piegando le ginocchia, mantieni la schiena dritta.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.jpg"
      },
      {
        title: "3. Cerchi con le braccia",
        description: "Braccia tese, disegna cerchi in avanti e indietro.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/arm-circles-exercise-illustration.jpg"
      },
      {
        title: "4. Plank a ginocchia",
        description: "Appoggia gli avambracci e le ginocchia, tieni il corpo in linea.",
        image: "https://www.spotebi.com/wp-content/uploads/2015/01/knee-plank-exercise-illustration.jpg"
      },
      {
        title: "5. Stretching gambe seduto",
        description: "Da seduto, allunga una gamba e raggiungi la punta del piede con le mani.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/seated-forward-bend-exercise-illustration.jpg"
      }
    ]
  },
  2: {
    intro: `Frequenza consigliata: 3 volte a settimana (es. lunedì – mercoledì – venerdì)<br>
            Durata totale: 12–15 minuti<br>
            Schema: 30 secondi esercizio / 30 secondi pausa – Ripeti il circuito 2 volte`,
    video: "https://www.youtube.com/watch?v=QWK9A_QbJ-k",
    esercizi: [
      {
        title: "1. Jumping Jack lento o marcia veloce",
        description: "Attivazione cardiovascolare moderata, adatta anche per principianti.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/jumping-jacks-exercise-illustration.jpg"
      },
      {
        title: "2. Affondi alternati",
        description: "Scendi piegando una gamba alla volta, mantieni l'equilibrio.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/lunges-exercise-illustration.jpg"
      },
      {
        title: "3. Push-up inclinato (su muro o tavolo)",
        description: "Appoggia le mani a un supporto stabile e piega le braccia mantenendo il corpo in linea.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/incline-push-up-exercise-illustration.jpg"
      },
      {
        title: "4. Plank classico o a ginocchia",
        description: "Attiva l'addome e mantieni la posizione.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg"
      },
      {
        title: "5. Stretching finale (collo, schiena, gambe)",
        description: "Rilassati e distendi i principali gruppi muscolari.",
        image: "https://www.spotebi.com/wp-content/uploads/2014/10/seated-side-straddle-stretch-exercise-illustration.jpg"
      }
    ]
  }
};

export default function Allenamento() {
  const [settimana, setSettimana] = useState(1);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== "undefined") {
      const saved = parseInt(localStorage.getItem("settimana"));
      if (saved) setSettimana(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("settimana", settimana);
    }
  }, [settimana]);

  const data = allenamenti[settimana];

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      if (currentExercise < data.esercizi.length - 1) {
        setCurrentExercise(currentExercise + 1);
        setTimeLeft(30);
      } else {
        setIsRunning(false);
        setCurrentExercise(0);
        setTimeLeft(30);
        alert("Circuito completato!");
      }
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, currentExercise, data.esercizi.length]);

  const startWorkout = () => {
    setIsRunning(true);
    setCurrentExercise(0);
    setTimeLeft(30);
  };

  return (
    <>
      <Head>
        <title>Allenamento Base</title>
        <meta name="description" content="Allenamento base settimanale per principianti" />
      </Head>
      <Header title="Allenamento Base" />
      <main style={{ padding: '2rem', backgroundColor: '#f4f4f4', fontFamily: 'Arial' }}>
        {hydrated && (
          <>
            <label htmlFor="settimana">Seleziona la settimana: </label>
            <select
              id="settimana"
              value={settimana}
              onChange={(e) => setSettimana(Number(e.target.value))}
              style={{ padding: '0.5rem', fontSize: '1rem', marginBottom: '1.5rem' }}
            >
              <option value={1}>Settimana 1</option>
              <option value={2}>Settimana 2</option>
            </select>

            <p dangerouslySetInnerHTML={{ __html: data.intro }} />

            <button onClick={startWorkout} style={{ padding: '0.7rem 1rem', fontSize: '1rem', marginBottom: '1rem', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '6px' }}>
              Avvia Allenamento
            </button>

            {isRunning ? (
              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <h2>{data.esercizi[currentExercise].title}</h2>
                <p>{data.esercizi[currentExercise].description}</p>
                <img
                  src={data.esercizi[currentExercise].image}
                  alt={data.esercizi[currentExercise].title}
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <h3 style={{ marginTop: '1rem' }}>Tempo restante: {timeLeft}s</h3>
              </div>
            ) : (
              <>
                {data.esercizi.map((ex, idx) => (
                  <div key={idx} style={{ marginBottom: '2rem' }}>
                    <h2>{ex.title}</h2>
                    <p>{ex.description}</p>
                    <img
                      src={ex.image}
                      alt={ex.title}
                      style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                    />
                  </div>
                ))}

                <h2>Video YouTube di riferimento</h2>
                <p>
                  <a href={data.video} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc' }}>
                    Guarda il video di riferimento
                  </a>
                </p>
              </>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
