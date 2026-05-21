import { useState } from "react";
import CardCourseDesign from "./cardCourseDesign";



export default function CardCoursesSection() {



    const [activeCategory, setActiveCategory] = useState("Все");

    const courses = [
        {
            id: 1,
            title: "Frontend (HTML && CSS)",
            duration: "4 месяцев",
            level: "Beginner",
            levelColor: "text-emerald-400",
            // tags: ["HTML", "CSS", "JavaScript", "React"],
            description: "Стань разработчиком современных веб-приложений",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
            ),
            iconBg: "bg-cyan-500/20",
            iconColor: "text-cyan-400",
            accentDark: "from-cyan-500/20 to-transparent",
            category: "Разработка",
            border: "hover:border-cyan-500/40",
            glow: "hover:shadow-cyan-500/10",
        },
        {
            id: 2,
            title: "JavaScript",
            duration: "4 месяцев",
            level: "Middle",
            levelColor: "text-amber-400",
            // tags: ["Node.js", "Express", "SQL", "API"],
            description: "Освой серверную разработку и базы данных",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            ),
            iconBg: "bg-amber-500/20",
            iconColor: "text-amber-400",
            accentDark: "from-amber-500/20 to-transparent",
            category: "Разработка",
            border: "hover:border-amber-500/40",
            glow: "hover:shadow-amber-500/10",
        },
        {
            id: 3,
            title: "React Developer",
            duration: "4 месяцев",
            level: "Middle",
            levelColor: "text-amber-400",
            // tags: ["React", "Node.js", "MongoDB", "API"],
            description: "Стань универсальным разработчиком",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
            ),
            iconBg: "bg-violet-500/20",
            iconColor: "text-violet-400",
            accentDark: "from-violet-500/20 to-transparent",
            category: "Разработка",
            border: "hover:border-violet-500/40",
            glow: "hover:shadow-violet-500/10",
        },
        {
            id: 4,
            title: "UI/UX Designer",
            duration: "4 месяцев",
            level: "Beginner",
            levelColor: "text-emerald-400",
            // tags: ["Figma", "UI Design", "UX", "Prototyping"],
            description: "Научись создавать удобные и красивые интерфейсы",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
            ),
            iconBg: "bg-rose-500/20",
            iconColor: "text-rose-400",
            accentDark: "from-rose-500/20 to-transparent",
            category: "Дизайн",
            border: "hover:border-rose-500/40",
            glow: "hover:shadow-rose-500/10",
        },
        {
            id: 5,
            title: "Python Developer",
            duration: "4 месяцев",
            level: "Beginner",
            levelColor: "text-emerald-400",
            // tags: ["Python", "Django", "Flask", "SQL"],
            description: "Программирование на Python от основ до проектов",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            ),
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400",
            accentDark: "from-blue-500/20 to-transparent",
            category: "Разработка",
            border: "hover:border-blue-500/40",
            glow: "hover:shadow-blue-500/10",
        },
        {
            id: 6,
            title: "Mobile Developer",
            duration: "4 месяцев",
            level: "Middle",
            levelColor: "text-amber-400",
            // tags: ["Flutter", "Dart", "Firebase"],
            description: "Разработка мобильных приложений для Android и iOS",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            ),
            iconBg: "bg-teal-500/20",
            iconColor: "text-teal-400",
            accentDark: "from-teal-500/20 to-transparent",
            category: "Разработка",
            border: "hover:border-teal-500/40",
            glow: "hover:shadow-teal-500/10",
        },
    ];

    const categories = ["Все", "Разработка", "Дизайн", "Аналитика", "Маркетинг", "Data"];


    const filtered =
        activeCategory === "Все"
            ? courses
            : courses.filter((c) => c.category === activeCategory);


    return (

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
                    // console.log(course)
                    
                    <CardCourseDesign key={course.id} course={course} index={i}/> 
                ))}
            </div>
        </div>
    )
}