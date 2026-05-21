export default function CardCourseDesign({course, index}) {
    

    return (
        <div
            className={`group relative rounded-2xl border border-white/8 shadow-xl bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden cursor-pointer transition-all duration-300 ${course.border} hover:shadow-xl ${course.glow} hover:-translate-y-1`}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {/* Top glow accent */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${course.accentDark}`} />

            {/* Card background accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${course.accentDark} opacity-50 rounded-bl-full`} />

            <div className="relative p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${course.iconBg} ${course.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {course.icon}
                </div>

                {/* Title & duration */}
                <h3 className="font-bold text-lg dark:text-white mb-1 dark:group-hover:text-cyan-50 transition-colors">
                    {course.title}
                </h3>
                <p className="dark:text-slate-500 text-sm mb-4">{course.duration}</p>

                {/* Description */}
                <p className="text-[gray] dark:text-slate-500 text-sm leading-relaxed mb-5">
                    {course.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs dark:text-slate-500">
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
    )
}