import Image from "next/image";

export default function CardMentorDesign(props) {
    return (
        <div className="transition-all duration-300 hover:-translate-y-1 dark:bg-[#070c19] bg-white rounded-2xl p-7 mt-5 text-white flex flex-col gap-5 shadow-xl">
            {/* Верхняя часть: Аватар и Имя */}
            <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                    <div className="absolute -inset-0.5 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                    <Image
                        src={props.avatar}
                        alt="Shodmonov Olimkhuja"
                        className="relative w-15 h-15 rounded-full object-cover border-2 border-slate-900"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold tracking-wide text-[black] dark:text-[white]  group-hover:text-blue-400 transition-colors">
                        {props.fullName}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[gray] mt-1">
                        {props.specialnost}
                    </p>
                </div>
            </div>
            <hr className="border-[gray]" />

            {/* Описание / Опыт */}
            <div className="space-y-3 text-sm text-[black] dark:text-slate-300 font-light leading-relaxed">
                <p> {props.description} </p>
                <p> {props.opit} </p>
                <p> {props.position} </p>
            </div>

            <hr className="border-[gray] my-2" />

            {/* Нижняя часть: Стек и Кнопка действия */}
            <div>
                {/* Иконки технологий */}
                <div className="flex items-center gap-2">
                    {props.technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="w-5 h-5  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
                            title={tech.name}
                        >
                            {tech.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}