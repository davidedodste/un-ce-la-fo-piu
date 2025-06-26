"use client";

// pages/music.js — Next.js client‑side random music generator ready for Netlify
// --------------------------------------------------------------
// ‣ No external dependencies: only Web Audio API
// ‣ Produces a short 8‑bar melody in the C‑major pentatonic scale every time you click
// ‣ Completely static – works with `next export`, so it deploys perfectly on Netlify

import { useState, useRef } from "react";

export default function RandomMusicGenerator() {
  const audioCtxRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simple pentatonic scale (C4 → C6)
  const scale = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.0,  // G4
    440.0,  // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.0,  // A5
  ];

  function playRandomTune() {
    if (isPlaying) return; // do nothing while a tune is already playing

    // Lazy‑create (or resume) the AudioContext after a user gesture
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;
    let cursor = now;

    // Build a 16‑note melody (~8 seconds at 120 BPM)
    const notes = Array.from({ length: 16 }, () =>
      scale[Math.floor(Math.random() * scale.length)]
    );

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine"; // try "triangle", "square" or "sawtooth" for a different flavour
      osc.frequency.value = freq;

      // Tiny amplitude envelope for a percussive/plucky feel
      gain.gain.setValueAtTime(0.0001, cursor);
      gain.gain.linearRampToValueAtTime(0.25, cursor + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, cursor + 0.45);

      osc.connect(gain).connect(ctx.destination);
      osc.start(cursor);
      osc.stop(cursor + 0.5); // note length 1/2 second

      cursor += 0.5; // advance beat
    });

    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), (cursor - now) * 1000);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Generatore di Musica Casuale
      </h1>
      <button
        onClick={playRandomTune}
        disabled={isPlaying}
        className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPlaying ? "In riproduzione…" : "Riproduci una melodia!"}
      </button>
      <p className="mt-6 text-sm text-gray-600 max-w-prose text-center">
        Tutto avviene localmente nel tuo browser grazie al&nbsp;Web&nbsp;Audio&nbsp;API – non
        servono backend o plugin particolari. Deploya con <code>next&nbsp;build &amp;&amp;
        next&nbsp;export</code> (o il&nbsp;plugin Netlify Next.js) e sei pronto ad ascoltare
        le tue creazioni casuali.
      </p>
    </main>
  );
}
