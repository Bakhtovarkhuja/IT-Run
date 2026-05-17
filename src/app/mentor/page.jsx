import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';
import Button2 from '../components/buttons/button2';
import MentorPhoto from "../photos/mentor.png"
import Image from 'next/image';
import htmlIcon from "../photos/html.png"
import cssIcon from "../photos/css.png"
import jsIcon from "../photos/js.png"
import reacrIcon from "../photos/react.png"
import nextIcon from "../photos/next.png"


export default function Page() {

	const technologies = [
		{
			name: 'C++', icon: <Image
				src={htmlIcon}
				alt="C++"
				width={30}
				height={30}
			/>
		}, // Здесь могут быть ваши SVG или теги <img>
		{
			name: 'C++', icon: <Image
				src={cssIcon}
				alt="C++"
				width={30}
				height={30}
			/>
		}, // Здесь могут быть ваши SVG или теги <img>
		{
			name: 'C++', icon: <Image
				src={jsIcon}
				alt="C++"
				width={30}
				height={30}
			/>
		}, // Здесь могут быть ваши SVG или теги <img>
		{
			name: 'C++', icon: <Image
				src={reacrIcon}
				alt="C++"
				width={30}
				height={30}
			/>
		}, // Здесь могут быть ваши SVG или теги <img>
		{
			name: 'C++', icon: <Image
				src={nextIcon}
				alt="C++"
				width={30}
				height={30}
			/>
		}, // Здесь могут быть ваши SVG или теги <img>
	];

	return (
		<div className=" mt-35 max-w-300 m-auto">
			<h1 className='text-2xl sm:text-5xl lg:text-4xl font-bold text-foreground leading-tight mb-6 text-white'>Эксперты IT-индустрии</h1>
			<span className="text-[gray]">Действующие специалисты, которые делятся реальным опытом и современными технологиями</span>
			<div className='flex my-20 justify-center flex-wrap gap-4 items-center'>
				<div className="  w-full max-w-97  overflow-hidden rounded-2xl 	bg-white/10
	backdrop-blur-xl p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

					{/* Декоративный светящийся фон при наведении */}

					{/* Верхняя часть: Аватар и Имя */}
					<div className="flex items-center gap-4 mb-6 relative z-10">
						<div className="relative">
							<div className="absolute -inset-0.5 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
							<Image
								src={MentorPhoto} // Замените на реальный путь к фото
								alt="Shodmonov Olimkhuja"
								className="relative w-20 h-20 rounded-full object-cover border-2 border-slate-900"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold tracking-wide text-slate-100 group-hover:text-blue-400 transition-colors">
								Шодмонов Олимхуча
							</h3>
							<p className="text-xs font-semibold uppercase tracking-widest text-[gray] mt-1">
								Frontend developer
							</p>
						</div>
					</div>

					{/* Описание / Опыт */}
					<div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
						<p>
							<strong className="font-semibold text-slate-200">Frontend developer</strong> с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
						</p>
						<p>
							Тимлид в <span className="text-blue-400 font-medium">IT-Run</span>. Руководит веб проектами на <span className="underline decoration-cyan-500/50">JavaScript</span> и <span className="underline decoration-cyan-500/50">Reacr/Next</span>.
						</p>
						<p className="text-slate-400 text-xs">
							Разрабатывает  веб-сайты для компании IT-Run и других успешных стартапов.
						</p>
					</div>

					<hr className="border-[gray] my-5" />

					{/* Нижняя часть: Стек и Кнопка действия */}
					<div>

						{/* Иконки технологий */}
						<div className="flex items-center gap-2">
							{technologies.map((tech, index) => (
								<div
									key={index}
									className="w-8 h-8  flex items-center justify-center text-sm shadow-md transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
									title={tech.name}
								>
									{tech.icon}
								</div>
							))}
						</div>

						{/* Кнопка связи */}
						
					</div>
				</div>
				<div className="  w-full max-w-97  overflow-hidden rounded-2xl 	bg-white/10
	backdrop-blur-xl p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

					{/* Декоративный светящийся фон при наведении */}

					{/* Верхняя часть: Аватар и Имя */}
					<div className="flex items-center gap-4 mb-6 relative z-10">
						<div className="relative">
							<div className="absolute -inset-0.5 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
							<Image
								src={MentorPhoto} // Замените на реальный путь к фото
								alt="Shodmonov Olimkhuja"
								className="relative w-20 h-20 rounded-full object-cover border-2 border-slate-900"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold tracking-wide text-slate-100 group-hover:text-blue-400 transition-colors">
								Шодмонов Олимхуча
							</h3>
							<p className="text-xs font-semibold uppercase tracking-widest text-[gray] mt-1">
								Frontend developer
							</p>
						</div>
					</div>

					{/* Описание / Опыт */}
					<div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
						<p>
							<strong className="font-semibold text-slate-200">Frontend developer</strong> с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
						</p>
						<p>
							Тимлид в <span className="text-blue-400 font-medium">IT-Run</span>. Руководит веб проектами на <span className="underline decoration-cyan-500/50">JavaScript</span> и <span className="underline decoration-cyan-500/50">Reacr/Next</span>.
						</p>
						<p className="text-slate-400 text-xs">
							Разрабатывает  веб-сайты для компании IT-Run и других успешных стартапов.
						</p>
					</div>

					<hr className="border-[gray] my-5" />

					{/* Нижняя часть: Стек и Кнопка действия */}
					<div>

						{/* Иконки технологий */}
						<div className="flex items-center gap-2">
							{technologies.map((tech, index) => (
								<div
									key={index}
									className="w-8 h-8  flex items-center justify-center text-sm shadow-md transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
									title={tech.name}
								>
									{tech.icon}
								</div>
							))}
						</div>

						{/* Кнопка связи */}
						
					</div>
				</div>
				<div className="  w-full max-w-97  overflow-hidden rounded-2xl 	bg-white/10
	backdrop-blur-xl p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

					{/* Декоративный светящийся фон при наведении */}

					{/* Верхняя часть: Аватар и Имя */}
					<div className="flex items-center gap-4 mb-6 relative z-10">
						<div className="relative">
							<div className="absolute -inset-0.5 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
							<Image
								src={MentorPhoto} // Замените на реальный путь к фото
								alt="Shodmonov Olimkhuja"
								className="relative w-20 h-20 rounded-full object-cover border-2 border-slate-900"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold tracking-wide text-slate-100 group-hover:text-blue-400 transition-colors">
								Шодмонов Олимхуча
							</h3>
							<p className="text-xs font-semibold uppercase tracking-widest text-[gray] mt-1">
								Frontend developer
							</p>
						</div>
					</div>

					{/* Описание / Опыт */}
					<div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
						<p>
							<strong className="font-semibold text-slate-200">Frontend developer</strong> с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
						</p>
						<p>
							Тимлид в <span className="text-blue-400 font-medium">IT-Run</span>. Руководит веб проектами на <span className="underline decoration-cyan-500/50">JavaScript</span> и <span className="underline decoration-cyan-500/50">Reacr/Next</span>.
						</p>
						<p className="text-slate-400 text-xs">
							Разрабатывает  веб-сайты для компании IT-Run и других успешных стартапов.
						</p>
					</div>

					<hr className="border-[gray] my-5" />

					{/* Нижняя часть: Стек и Кнопка действия */}
					<div>

						{/* Иконки технологий */}
						<div className="flex items-center gap-2">
							{technologies.map((tech, index) => (
								<div
									key={index}
									className="w-8 h-8  flex items-center justify-center text-sm shadow-md transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
									title={tech.name}
								>
									{tech.icon}
								</div>
							))}
						</div>

						{/* Кнопка связи */}
						
					</div>
				</div>
				<div className="  w-full max-w-97  overflow-hidden rounded-2xl 	bg-white/10
	backdrop-blur-xl p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

					{/* Декоративный светящийся фон при наведении */}

					{/* Верхняя часть: Аватар и Имя */}
					<div className="flex items-center gap-4 mb-6 relative z-10">
						<div className="relative">
							<div className="absolute -inset-0.5 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
							<Image
								src={MentorPhoto} // Замените на реальный путь к фото
								alt="Shodmonov Olimkhuja"
								className="relative w-20 h-20 rounded-full object-cover border-2 border-slate-900"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold tracking-wide text-slate-100 group-hover:text-blue-400 transition-colors">
								Шодмонов Олимхуча
							</h3>
							<p className="text-xs font-semibold uppercase tracking-widest text-[gray] mt-1">
								Frontend developer
							</p>
						</div>
					</div>

					{/* Описание / Опыт */}
					<div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
						<p>
							<strong className="font-semibold text-slate-200">Frontend developer</strong> с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
						</p>
						<p>
							Тимлид в <span className="text-blue-400 font-medium">IT-Run</span>. Руководит веб проектами на <span className="underline decoration-cyan-500/50">JavaScript</span> и <span className="underline decoration-cyan-500/50">Reacr/Next</span>.
						</p>
						<p className="text-slate-400 text-xs">
							Разрабатывает  веб-сайты для компании IT-Run и других успешных стартапов.
						</p>
					</div>

					<hr className="border-[gray] my-5" />

					{/* Нижняя часть: Стек и Кнопка действия */}
					<div>

						{/* Иконки технологий */}
						<div className="flex items-center gap-2">
							{technologies.map((tech, index) => (
								<div
									key={index}
									className="w-8 h-8  flex items-center justify-center text-sm shadow-md transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
									title={tech.name}
								>
									{tech.icon}
								</div>
							))}
						</div>

						{/* Кнопка связи */}
						
					</div>
				</div>
			</div>

		</div>
	)
}