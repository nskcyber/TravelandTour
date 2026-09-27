"use client";
import {motion} from "motion/react";
export default function Hero() {
  return (
    <section
      className="relative flex h-[75vh] items-center justify-center bg-cover bg-center animate-slow-zoom"
      style={{ backgroundImage: "url('/images/airplane-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <motion.h1 
        initial={{opacity: 0, y: 30 }}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="text-4xl font-bold md:text-6xl">
          Study Abroad & Travel the World
        </motion.h1>
        <motion.p 
        initial={{opacity: 0, y: 30 }}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="mt-4 text-lg md:text-xl">
          Trusted by students and travellers from Ghana 🇬🇭 and Nigeria 🇳🇬 — admissions, visas, scholarships and unforgettable tours.
        </motion.p>
        <motion.div 
        initial={{opacity: 0, y: 30 }}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/study-abroad" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40">
            Start Your Application
          </a>
          <a href="/tours" className="rounded-lg bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40">
            Explore Tour Packages
          </a>
        </motion.div>
      </div>
    </section>
  );
}
