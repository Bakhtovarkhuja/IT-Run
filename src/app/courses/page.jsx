"use client";

import { useState } from "react";
import Button2 from "../components/buttons/button2"; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'



export default function Page() {

	const [activeCategory, setActiveCategory] = useState("Все");

	const courses = [
		{
			id: 1,
			title: "Frontend Developer",
			duration: "6 месяцев",
			level: "Beginner",
			levelColor: "text-emerald-400",
			tags: ["HTML", "CSS", "JavaScript", "React"],
			description: "Стань разработчиком современных веб-приложений",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
				</svg>
			),
			iconBg: "bg-cyan-500/20",
			iconColor: "text-cyan-400",
			accent: "from-cyan-500/20 to-transparent",
			category: "Разработка",
			border: "hover:border-cyan-500/40",
			glow: "hover:shadow-cyan-500/10",
		},
		{
			id: 2,
			title: "Backend Developer",
			duration: "8 месяцев",
			level: "Middle",
			levelColor: "text-amber-400",
			tags: ["Node.js", "Express", "SQL", "API"],
			description: "Освой серверную разработку и базы данных",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
				</svg>
			),
			iconBg: "bg-amber-500/20",
			iconColor: "text-amber-400",
			accent: "from-amber-500/20 to-transparent",
			category: "Разработка",
			border: "hover:border-amber-500/40",
			glow: "hover:shadow-amber-500/10",
		},
		{
			id: 3,
			title: "Fullstack Developer",
			duration: "10 месяцев",
			level: "Middle",
			levelColor: "text-amber-400",
			tags: ["React", "Node.js", "MongoDB", "API"],
			description: "Стань универсальным разработчиком",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
				</svg>
			),
			iconBg: "bg-violet-500/20",
			iconColor: "text-violet-400",
			accent: "from-violet-500/20 to-transparent",
			category: "Разработка",
			border: "hover:border-violet-500/40",
			glow: "hover:shadow-violet-500/10",
		},
		{
			id: 4,
			title: "UI/UX Designer",
			duration: "5 месяцев",
			level: "Beginner",
			levelColor: "text-emerald-400",
			tags: ["Figma", "UI Design", "UX", "Prototyping"],
			description: "Научись создавать удобные и красивые интерфейсы",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
				</svg>
			),
			iconBg: "bg-rose-500/20",
			iconColor: "text-rose-400",
			accent: "from-rose-500/20 to-transparent",
			category: "Дизайн",
			border: "hover:border-rose-500/40",
			glow: "hover:shadow-rose-500/10",
		},
		{
			id: 5,
			title: "Python Developer",
			duration: "6 месяцев",
			level: "Beginner",
			levelColor: "text-emerald-400",
			tags: ["Python", "Django", "Flask", "SQL"],
			description: "Программирование на Python от основ до проектов",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
				</svg>
			),
			iconBg: "bg-blue-500/20",
			iconColor: "text-blue-400",
			accent: "from-blue-500/20 to-transparent",
			category: "Разработка",
			border: "hover:border-blue-500/40",
			glow: "hover:shadow-blue-500/10",
		},
		{
			id: 6,
			title: "Mobile Developer",
			duration: "6 месяцев",
			level: "Middle",
			levelColor: "text-amber-400",
			tags: ["Flutter", "Dart", "Firebase"],
			description: "Разработка мобильных приложений для Android и iOS",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
				</svg>
			),
			iconBg: "bg-teal-500/20",
			iconColor: "text-teal-400",
			accent: "from-teal-500/20 to-transparent",
			category: "Разработка",
			border: "hover:border-teal-500/40",
			glow: "hover:shadow-teal-500/10",
		},
		{
			id: 7,
			title: "Data Analyst",
			duration: "5 месяцев",
			level: "Beginner",
			levelColor: "text-emerald-400",
			tags: ["Excel", "SQL", "Power BI", "Python"],
			description: "Анализируй данные и принимай бизнес-решения",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
				</svg>
			),
			iconBg: "bg-orange-500/20",
			iconColor: "text-orange-400",
			accent: "from-orange-500/20 to-transparent",
			category: "Аналитика",
			border: "hover:border-orange-500/40",
			glow: "hover:shadow-orange-500/10",
		},
		{
			id: 8,
			title: "Digital Marketer",
			duration: "4 месяца",
			level: "Beginner",
			levelColor: "text-emerald-400",
			tags: ["SEO", "SMM", "Google Ads", "Analytics"],
			description: "Продвигай бренды в интернете и увеличивай продажи",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
				</svg>
			),
			iconBg: "bg-pink-500/20",
			iconColor: "text-pink-400",
			accent: "from-pink-500/20 to-transparent",
			category: "Маркетинг",
			border: "hover:border-pink-500/40",
			glow: "hover:shadow-pink-500/10",
		},
		{
			id: 9,
			title: "Data Scientist",
			duration: "8 месяцев",
			level: "Middle",
			levelColor: "text-amber-400",
			tags: ["Python", "ML", "TensorFlow", "Stats"],
			description: "Строй модели машинного обучения и предсказывай будущее",
			icon: (
				<svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
				</svg>
			),
			iconBg: "bg-indigo-500/20",
			iconColor: "text-indigo-400",
			accent: "from-indigo-500/20 to-transparent",
			category: "Data",
			border: "hover:border-indigo-500/40",
			glow: "hover:shadow-indigo-500/10",
		},
	];

	const categories = ["Все", "Разработка", "Дизайн", "Аналитика", "Маркетинг", "Data"];


	const filtered =
		activeCategory === "Все"
			? courses
			: courses.filter((c) => c.category === activeCategory);

	return (
		<div className=" mt-35 max-w-300 m-auto">
			<h1 className='text-2xl sm:text-5xl lg:text-4xl font-bold text-foreground leading-tight mb-6 text-white'>Все курсы</h1>
			<span className="text-[gray]">От новичка до специалиста — с реальными проектами</span>
			<div className='my-20'>

				<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-10">
					{/* Category pills — scroll on mobile */}
					<div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 flex-1 no-scrollbar">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
									? "bg-white text-[#080c14] border-white shadow-lg shadow-white/10"
									: "text-slate-400 border-white/10 hover:border-white/30 hover:text-white bg-white/5"
									}`}
							>
								{cat}
							</button>
						))}
					</div>
				</div>

				{/* Stats row */}
				<div className="flex gap-6 mb-8 text-sm text-slate-500">
					<span><span className="text-white font-semibold">{filtered.length}</span> курсов</span>
					<span><span className="text-white font-semibold">4 800+</span> студентов</span>
					<span><span className="text-white font-semibold">94%</span> трудоустройство</span>
				</div>

				{/* Course grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
					{filtered.map((course, i) => (
						<CourseCard key={course.id} course={course} index={i} />
					))}
				</div>
			</div>

			<div className="my-20 border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl flex items-center justify-between px-10 py-7">
				<div>
					<span className="text-2xl sm:text-5xl lg:text-3xl font-bold text-foreground leading-tight mb-6 text-white">Поможем выбрать направление в IT</span><br />
					<span className="text-[gray]">Пройдите тест и получите персональную рекомендацию</span>
				</div>
				<Button2> <span className="my-2 mx-5"> Пройти тест <ArrowForwardIcon/></span> </Button2>
			</div>


		</div>
	)
}

function CourseCard({ course, index }) {
	return (
		<div
			className={`group relative rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden cursor-pointer transition-all duration-300 ${course.border} hover:shadow-xl ${course.glow} hover:-translate-y-1`}
			style={{ animationDelay: `${index * 50}ms` }}
		>
			{/* Top glow accent */}
			<div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${course.accent}`} />

			{/* Card background accent */}
			<div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${course.accent} opacity-50 rounded-bl-full`} />

			<div className="relative p-6">
				{/* Icon */}
				<div className={`w-12 h-12 rounded-xl ${course.iconBg} ${course.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
					{course.icon}
				</div>

				{/* Title & duration */}
				<h3 className="font-bold text-lg text-white mb-1 group-hover:text-cyan-50 transition-colors">
					{course.title}
				</h3>
				<p className="text-slate-500 text-sm mb-4">{course.duration}</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-1.5 mb-4">
					{course.tags.map((tag) => (
						<span
							key={tag}
							className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-slate-400 border border-white/8"
						>
							{tag}
						</span>
					))}
				</div>

				{/* Description */}
				<p className="text-slate-500 text-sm leading-relaxed mb-5">
					{course.description}
				</p>

				{/* Footer */}
				<div className="flex items-center justify-between pt-4 border-t border-white/5">
					<span className="text-xs text-slate-500">
						Уровень:{" "}
						<span className={`font-semibold ${course.levelColor}`}>
							{course.level}
						</span>
					</span>
					<button className={`flex items-center gap-1.5 text-sm font-semibold ${course.iconColor} group-hover:gap-2.5 transition-all duration-200`}>
						Подробнее
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}