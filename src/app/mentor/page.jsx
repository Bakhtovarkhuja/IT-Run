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
		<div className="">
			<div className='mt-35 max-w-300 m-auto'>
				<h1 className='text-2xl sm:text-5xl lg:text-4xl font-bold text-foreground leading-tight mb-6'>Эксперты IT-индустрии</h1>
				<p className="text-[gray] -my-3">Действующие специалисты, которые делятся реальным опытом и современными технологиями</p>
			</div>
			<div className='my-10 bg-gradient-to-r from-[#001d35] to-[#070c19]'>
				<div className='max-w-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 m-auto py-[30px]'>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-full max-w-97  overflow-hiddenrounded-2xl border rounded-2xl border-white/8 bg-gradient-to-br from-white/[0.04
	backdrop-blur-xl p-6   transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] border-1 border-gray-500">

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
								<h3 className="text-xl font-bold tracking-wide text-[white]  group-hover:text-blue-400 transition-colors">
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
								Frontend developer с опытом более 3 лет в создании высоконагруженных кроссплатформенных веб-приложений.
							</p>
							<p>
								Тимлид в IT-Run. Руководит веб проектами на JavaScript и Reacr/Next.
							</p>
							<p>
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
										className="w-8 h-8  flex items-center justify-center text-sm transform hover:-translate-y-1 hover:z-20 transition-all duration-200 cursor-help"
										title={tech.name}
									>
										{tech.icon}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}