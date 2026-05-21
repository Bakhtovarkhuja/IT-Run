"use client";

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { useState, useEffect, useRef } from "react";
import HandshakeIcon from '@mui/icons-material/Handshake'
import PublicIcon from '@mui/icons-material/Public';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RadarIcon from '@mui/icons-material/Radar';


import it from '@/app/photos/logo3.png'
import eskhata from '@/app/photos/eskhata.png'
import alif from '@/app/photos/alif.png'
import wilddberis from '@/app/photos/widdberis.png'
import avito from '@/app/photos/avito.png'
import ds from '@/app/photos/ds.png'
import Image from 'next/image';


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

// --- Main Page ---
export default function Page() {

  return (
    <div className="min-h-screen mt-10 text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>


      {/* ── MISSION ── */}
      <MissionSection />


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
                <span className="text-[#ff7b00]">будущее</span> <span>{`/>`}</span>
              </p>
            </blockquote>
            <p className="text-[gray] dark:text-slate-400 leading-relaxed mt-8 text-base sm:text-lg">
              Основная цель ООО «Новый Алгоритм» — развитие логики, глубокое понимание IT и подготовка юных кадров с последующим трудоустройством. Мы даём молодёжи навыки программирования, потому что это требование нового мира.
            </p>

            {/* Highlight cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <RadarIcon fontSize="large" className="text-[#ff7b00]" />, text: "Развитие логики и алгоритмического мышления" },
                { icon: <BusinessCenterIcon fontSize="large" className="text-[#ff7b00]" />, text: "Трудоустройство выпускников 18+" },
                { icon: <PublicIcon fontSize="large" className="text-[#ff7b00]" />, text: "Встречи в университетах и школах города" },
                { icon: <HandshakeIcon fontSize="large" className="text-[#ff7b00]" />, text: "Гранты и международные проекты" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 p-4 dark:bg-[#070c19] bg-white rounded-2xl text-white flex flex-col gap-5 shadow-xl">
                  <span className="">{item.icon}</span>
                  <span className="text-[black] dark:text-slate-400 text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Story text */}
          <div className={`reveal ${inView ? "in" : ""} space-y-5`} style={{ transitionDelay: "200ms" }}>
            <div className="p-6 dark:bg-[#070c19] bg-white rounded-2xl p-7 mt-5 text-white flex flex-col gap-5 shadow-xl rounded-2xl ">
              <p className="text-[black] dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                ООО «Новый Алгоритм» в марте 2020 года, на пике пандемии COVID-19, начала свою деятельность в области детского программирования в г. Худжанде. Показывая хорошие результаты и войдя в доверие родителей и детей, уже в августе 2020 года открыла филиал в г. Душанбе.
              </p>
            </div>
            <div className="p-6 dark:bg-[#070c19] bg-white rounded-2xl p-7 mt-5 text-white flex flex-col gap-5 shadow-xl">
              <p className="text-[black] dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                До сегодняшнего дня у нас обучались более <strong className="text-[#ff7b00af]">1500 учеников-подростков</strong>, более <strong className="text-[#ff7b00af]">300 человек</strong> получили профессиональные знания по направлениям PHP, Android, C#, Python, WordPress, Figma и Data Analytics.
              </p>
            </div>
            <div className="p-6 dark:bg-[#070c19] bg-white rounded-2xl p-7 mt-5 text-white flex flex-col gap-5 shadow-xl">
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

        <aside className='h-10'>
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className='w-full'
          >
            <SwiperSlide>
              <div className='w-35 h-15 flex items-center justify-center'>
                <Image className='w-25' src={it} alt='itrun' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-35 h-15 flex items-center justify-center'>
                <Image className='w-35' src={eskhata} alt='eskhata' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-35 h-15 flex items-center justify-center'>
                <Image className='w-35' src={wilddberis} alt='wildberries' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-35 h-15 flex items-center justify-center'>
                <Image className='w-35' src={avito} alt='avito' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-35 h-15 flex items-center justify-center'>
                <Image className='w-35' src={ds} alt='ds' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-35 h-15 flex items-center justify-center'>
                <Image className='w-35' src={alif} alt='alif' />
              </div>
            </SwiperSlide>
          </Swiper>
        </aside>
      </div>
      <h1 className='text'>Hello</h1>
    </section>
  );
}
