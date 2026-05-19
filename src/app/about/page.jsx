"use client";

import { useState, useEffect, useRef } from "react";
import logo from "../photos/logo.png"
import Image from "next/image";

import PeopleIcon from '@mui/icons-material/People'
import MovingIcon from '@mui/icons-material/Moving'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import HandshakeIcon from '@mui/icons-material/Handshake'


// --- Animated counter hook ---
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// --- Intersection observer hook ---
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// --- Stats ---
const stats = [
  { value: 1500, suffix: "+", label: "Учеников обучено", icon: <PeopleIcon /> },
  { value: 300, suffix: "+", label: "IT-специалистов выпущено", icon: <MovingIcon /> },
  { value: 150, suffix: "+", label: "Трудоустроено", icon: <KeyboardDoubleArrowRightIcon /> },
  { value: 4, suffix: "", label: "Года работы", icon: <HandshakeIcon /> },
];

// --- Partners ---
const partners = [
  "Freedom IT Hub", "IT Park Таджикистана", "ПРООН в Таджикистане",
  "USAID_FGI", "Специалисты Шёлкового Пути", "Робитаи Нав",
  "Исп. орган Согдийской области", "ЧДММ IT-Service",
];

const employers = [
  "IT Service", "Банк Эсхата", "Коммерцбанк",
  "Банк Арванд", "МДО Хумо", "Мегафон Таджикистан",
  "Компания Ливо", "Хумо Лаб",
];

const courses = [
  "PHP", "Android (Kotlin)", "C#", "Python",
  "WordPress", "Figma", "Data Analytics",
];

// --- Timeline ---
const timeline = [
  {
    year: "Март 2020",
    title: "Основание в Худжанде",
    text: "На пике пандемии COVID-19 открыли первый центр детского программирования в Худжанде.",
    color: "border-cyan-500 bg-cyan-500/10 text-cyan-400",
    dot: "bg-cyan-500",
  },
  {
    year: "Август 2020",
    title: "Филиал в Душанбе",
    text: "Показав отличные результаты и завоевав доверие, открыли второй центр в столице.",
    color: "border-violet-500 bg-violet-500/10 text-violet-400",
    dot: "bg-violet-500",
  },
  {
    year: "Май 2021",
    title: "Международное сотрудничество",
    text: "Начали партнёрство с международными организациями и реализовали проекты по предоставлению ИТ.",
    color: "border-amber-500 bg-amber-500/10 text-amber-400",
    dot: "bg-amber-500",
  },
  {
    year: "2024",
    title: "15 сотрудников, 2 центра",
    text: "Более 1500 учеников, 150+ трудоустроенных специалистов. Продолжаем расти.",
    color: "border-emerald-500 bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-500",
  },
];

// --- Stat Card ---
// function StatCard({ stat, index }) {
//   const [ref, inView] = useInView();
//   const count = useCounter(stat.value, 2200, inView);
//   return (
//     <div
//       ref={ref}
//       className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8 text-center group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
//       style={{ animationDelay: `${index * 100}ms` }}
//     >
//       <div className={`text-4xl sm:text-5xl font-black mb-2 tabular-nums ${stat.color}`}>
//         {count.toLocaleString()}{stat.suffix}
//       </div>
//       <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
//     </div>
//   );
// }

// --- Main Page ---
export default function Page() {
  const [heroRef, heroIn] = useInView(0.1);

  return (
    <div className="min-h-screen mt-10 text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }
        .line-draw { stroke-dasharray: 800; stroke-dashoffset: 800; transition: stroke-dashoffset 2s ease; }
        .line-draw.in { stroke-dashoffset: 0; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:.4} 100%{transform:scale(1.8);opacity:0} }
        .float { animation: float 6s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .ticker { display: flex; gap: 2rem; animation: ticker 25s linear infinite; white-space: nowrap; }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #06090f; } ::-webkit-scrollbar-thumb { background: #1e2940; border-radius: 4px; }
      `}</style>

      {/* ── HERO ── */}


      {/* ── STATS ── */}

      {/* ── MISSION ── */}
      <MissionSection />
      {/* <section className='max-w-300 mx-auto flex items-center justify-between border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04 backdrop-blur-xl px-18 py-5'>
        {
          stats.map((e, index) => {
            return (
              <div className='flex items-center gap-4 '>
                <div
                  className='inline-block rounded-lg p-px hover:rotate-180 duration-700 bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))] bg-size-[300%_300%] animate-[gradientMove_5s_linear_infinite]'
                >
                  <div className='px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
                    {e.icon}
                  </div>
                </div>
                <div>
                  <p className='text-[38px]'>{e.value}</p>
                  <p className='text-[gray] text-[15px] -mt-2'>{e.label}</p>
                </div>
              </div>
            )
          })
        }
      </section> */}

      {/* ── TIMELINE ── */}
      <TimelineSection />


      {/* ── PARTNERS ── */}
      <PartnersSection partners={partners} employers={employers} />
    </div>
  );
}

// ── MISSION ──
function MissionSection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="relative z-10 py-20 sm:py-20">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className={`reveal ${inView ? "in" : ""} flex items-center gap-3 mb-12`}>
          <span className="w-8 h-px bg-[#ff7b00]" />
          <span className="text-[#ff7b00] font-bold uppercase tracking-widest">Наша миссия</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Big quote */}
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "100ms" }}>
            <blockquote className="relative">
              <svg className="absolute -top-7 -z-1 -left-8 w-12 h-12 text-[#ff7b00af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-3xl sm:text-4xl text-[black] dark:text-[white] font-bold  pl-6">
                За программированием —
                <span className="text-[#ff7b00af]">будущее</span> <span>{`/>`}</span>
              </p>
            </blockquote>
            <p className="text-[gray] dark:text-slate-400 leading-relaxed mt-8 text-base sm:text-lg">
              Основная цель ООО «Новый Алгоритм» — развитие логики, глубокое понимание IT и подготовка юных кадров с последующим трудоустройством. Мы даём молодёжи навыки программирования, потому что это требование нового мира.
            </p>

            {/* Highlight cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "🎯", text: "Развитие логики и алгоритмического мышления" },
                { icon: "💼", text: "Трудоустройство выпускников 18+" },
                { icon: "🌐", text: "Встречи в университетах и школах города" },
                { icon: "🤝", text: "Гранты и международные проекты" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 p-4 border rounded-2xl bg-[#ffffff] dark:bg-[#ffffff00] border-[gray] dark:border-white/8 from-white/[0.04
	backdrop-blur-xl dark:hover:border-white/15 transition-colors">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[black] dark:text-slate-400 text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Story text */}
          <div className={`reveal ${inView ? "in" : ""} space-y-5`} style={{ transitionDelay: "200ms" }}>
            <div className="p-6 border bg-[white] dark:bg-[#ffffff00] border-[gray] rounded-2xl dark:border-white/8  from-white/[0.04] backdrop-blur-xl">
              <p className="text-[black] dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                ООО «Новый Алгоритм» в марте 2020 года, на пике пандемии COVID-19, начала свою деятельность в области детского программирования в г. Худжанде. Показывая хорошие результаты и войдя в доверие родителей и детей, уже в августе 2020 года открыла филиал в г. Душанбе.
              </p>
            </div>
            <div className="p-6 border bg-[white] dark:bg-[#ffffff00] border-[gray] rounded-2xl dark:border-white/8  from-white/[0.04] backdrop-blur-xl">
              <p className="text-[black] dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                До сегодняшнего дня у нас обучались более <strong className="text-[#ff7b00af]">1500 учеников-подростков</strong>, более <strong className="text-[#ff7b00af]">300 человек</strong> получили профессиональные знания по направлениям PHP, Android, C#, Python, WordPress, Figma и Data Analytics.
              </p>
            </div>
            <div className="p-6 border bg-[white] dark:bg-[#ffffff00] border-[gray] rounded-2xl dark:border-white/8  from-white/[0.04] backdrop-blur-xl">
              <p className="text-[black] dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Начиная с мая 2021 года мы стали сотрудничать с международными организациями и реализовали несколько проектов по предоставлению ИТ. Спрос на обучение программированию среди молодёжи растёт с каждым днём.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── TIMELINE ──
function TimelineSection() {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} className=" darkBg relative z-10 py-20 sm:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className={`reveal ${inView ? "in" : ""} text-center mb-16`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff7b00] dark:border-white/10 bg-white/5 text-[black] dark:text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
            История
          </div>
          <h2 className="syne text-3xl sm:text-4xl font-black text-[black] dark:text-[white] ">
            Наш путь
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#ff7b00] dark:bg-[white]" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`reveal ${inView ? "in" : ""} relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"} pl-10 sm:pl-0`}>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${item.color}`}>
                    {item.year}
                  </div>
                  <h3 className="syne font-black text-[black] dark:text-white text-xl mb-2">{item.title}</h3>
                  <p className=" text-[gray] dark:text-slate-400 text-sm leading-relaxed max-w-sm">{item.text}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1">
                  <div className={`w-3 h-3 rounded-full ${item.dot} ring-4 ring-[#06090f] shadow-lg`} />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// ── PARTNERS ──
function PartnersSection({ partners, employers }) {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} className="relative z-10 py-20 sm:py-28 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`reveal ${inView ? "in" : ""} text-center mb-16`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff7b00] dark:border-white/10 bg-white/5 text-[black] dark:text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
            ЭКОСИСТЕМА
          </div>
          <h2 className="syne text-3xl sm:text-4xl font-black text-[black] dark:text-white mb-4">Наши партнёры</h2>
          <p className="text-[gray] dark:text-slate-400 max-w-lg mx-auto">
            Мы работаем с ведущими IT-организациями, банками и международными фондами Таджикистана
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Strategic partners */}
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "100ms" }}>
            <h3 className="text-sm font-bold text-[blue] dark:text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[blue] dark:bg-cyan-500" /> Стратегические партнёры
            </h3>
            <div className="space-y-2">
              {partners.map((p) => (
                <div key={p} className="flex items-center gap-3 p-3.5 border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl hover:border-cyan-500/20 transition-all duration-200 group">
                  <span className="w-2 h-2 rounded-full bg-cyan-500/60 group-hover:bg-cyan-400 transition-colors flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Employers */}
          <div className={`reveal ${inView ? "in" : ""}`} style={{ transitionDelay: "200ms" }}>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500" /> Работодатели выпускников
            </h3>
            <div className="space-y-2">
              {employers.map((e) => (
                <div key={e} className="flex items-center gap-3 p-3.5 border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl hover:border-amber-500/20 transition-all duration-200 group">
                  <span className="w-2 h-2 rounded-full bg-amber-500/60 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{e}</span>
                  <span className="ml-auto text-xs text-slate-600 group-hover:text-amber-600 transition-colors">Меморандум</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-xs mt-3 pl-1">...и другие партнёры по трудоустройству</p>
          </div>
        </div>
      </div>
    </section>
  );
}
