'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import Button from './components/buttons/button1'
import Button2 from './components/buttons/button2'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PeopleIcon from '@mui/icons-material/People'
import MovingIcon from '@mui/icons-material/Moving'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import HandshakeIcon from '@mui/icons-material/Handshake'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import FolderIcon from '@mui/icons-material/Folder'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import RoadCard from '@/app/components/roadCard/roadCard'
import StudentCard from '@/app/components/studentCard/studentCard'
import it from '@/app/photos/logo3.png'
import eskhata from '@/app/photos/eskhata.png'
import alif from '@/app/photos/alif.png'
import wilddberis from '@/app/photos/widdberis.png'
import avito from '@/app/photos/avito.png'
import ds from '@/app/photos/ds.png'
import logo from '@/app/photos/logo3.png'

export default function Home() {
	return (
		<div className='max-w-300 m-auto mt-35 mb-10 flex flex-col gap-10'>
			<section>
				<div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-600 dark:border-cyan-500/25 dark:bg-cyan-500/8 dark:text-cyan-400 text-xs font-semibold mb-6 uppercase tracking-widest'>
								<span className='w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-cyan-400 animate-pulse' />
								С 2020 года · Худжанд & Душанбе
							</div>
							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-6'>
								Программирование —
								<span className='bg-gradient-to-r text-[#ff7b00] bg-clip-text '>
									{`язык будущего`}
								</span>
								<span>{`/>`}</span>
							</h1>
							<p className='text-slate-400 text-lg leading-relaxed mb-8 max-w-xl'>
								{/* Умение программировать так же важно, как умение читать. Это требование рынка и нового мира. <strong className='text-black dark:text-[white]'>«Новый Алгоритм»</strong> — это место, где молодёжь Таджикистана открывает для себя IT. */}
								От первого кода до первой работы в tech.
							</p>
							<div className='flex flex-wrap gap-4 mb-10'>
								<Button2>
									Начать обучение
									<ArrowForwardIcon></ArrowForwardIcon>
								</Button2>
								<Button>Смотреть программы</Button>
							</div>

							<div className='flex items-center gap-4'>
								<div className='flex -space-x-2'>
									{[1, 2, 3, 4, 5].map(i => (
										<div
											key={i}
											className='w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium text-foreground'
										>
											{String.fromCharCode(64 + i)}
										</div>
									))}
								</div>
								<div>
									<p className='text-sm font-medium text-foreground'>
										{'1000+ студентов уже с нами'}
									</p>
									<p className='text-xs text-[gray] text-muted-foreground'>
										{'95% трудоустройство наших выпускников'}
									</p>
								</div>
							</div>
						</div>
						<div
							className={`reveal hidden lg:flex items-center justify-center`}
							style={{ transitionDelay: '150ms' }}
						>
							<div className='relative w-[380px] h-[380px]'>
								<div className='absolute -inset-6 rounded-full border border-[#70707083] dark:border-white/5 spin-slow' />
								<div className='absolute inset-0 rounded-full border border-[#4d444481] dark:border-white/5 spin-slow' />
								<div
									className='absolute inset-6 rounded-full border border-[#8a313170] dark:border-cyan-500/15 spin-slow'
									style={{
										animationDirection: 'reverse',
										animationDuration: '15s',
									}}
								/>
								<div
									className='absolute inset-12 rounded-full border border-[#8000807e] dark:border-violet-500/15 spin-slow'
									style={{ animationDuration: '25s' }}
								/>

								<div className='absolute inset-0 flex items-center justify-center'>
									<div
										className='float w-60 rounded-4xl border border-white/10 bg-gradient-to-br bg-white/0
backdrop-blur-xl dark:from-white/8 backdrop-blur-sm p-6 text-center shadow-2xl shadow-black/50'
									>
										<div className='w-22 h-14 rounded-xl flex items-center justify-center mx-auto mb-4'>
											<span>
												{' '}
												<Image src={logo} />{' '}
											</span>
										</div>
										<div className='font-bold text-3xl mb-1'>IT Run</div>
										<div className='text-[13px] text-[gray]'>Academy</div>
										<div className='mt-3 text-xs mt-15 text-slate-500'>
											IT Academy · с 2020
										</div>
									</div>
								</div>

								{[
									{
										label: '1500+ учеников',
										top: '4%',
										left: '50%',
										color:
											' border-blue-600 bg-white/0 backdrop-blur-xl dark:bg-cyan-500/20 dark:border-cyan-500/30 dark:text-cyan-400',
									},
									{
										label: '150+ трудоуст.',
										top: '50%',
										left: '90%',
										color:
											'border-orange-600 bg-white/0 backdrop-blur-xl  dark:bg-amber-500/20 dark:border-amber-500/30 dark:text-amber-400',
									},
									{
										label: '2 центра',
										top: '99%',
										left: '50%',
										color:
											'border-purple-600 bg-white/0 backdrop-blur-xl dark:bg-violet-500/20 dark:border-violet-500/30 dark:text-violet-400',
									},
									{
										label: '6 года',
										top: '50%',
										left: '2%',
										color:
											'border-green-600 bg-white/0 backdrop-blur-xl dark:bg-emerald-500/20 dark:border-emerald-500/30 dark:text-emerald-400',
									},
								].map(b => (
									<div
										key={b.label}
										className={`absolute text-xs font-semibold px-3 py-1.5 rounded-full border ${b.color} -translate-x-1/2 -translate-y-1/2 whitespace-nowrap`}
										style={{ top: b.top, left: b.left }}
									>
										{b.label}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className='
	flex items-center justify-between
	rounded-2xl
	bg-white/5
	border border-white/20
	shadow-2xl
	px-18 py-5 mt-6'
			>
				<div className='flex items-center gap-4 '>
					<div
	className="
		group
		relative
		w-16
		h-16

		rounded-2xl

		flex
		items-center
		justify-center

		bg-white/5
		dark:bg-white/5

		border-3
		border-orange-400/20
		dark:border-orange-400/30

		backdrop-blur-xl

		shadow-[0_4px_20px_rgba(0,0,0,0.08)]

		hover:border-orange-400/50
		hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]

		transition-all
		duration-300
	"
>
	<div
		className="
			absolute
			inset-0
			rounded-2xl
			bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]
		"
	/>

	<PeopleIcon
		sx={{
			fontSize: 30,
			color: '#fb923c',
		}}
		className="relative z-10"
	/>
</div>
					<div>
						<p className='text-[38px]'>1,000+</p>
						<p className='text-[gray] text-[15px] -mt-2'>Выпускников</p>
					</div>
				</div>
				<div className='flex items-center gap-4 '>
					<div
						className='
				inline-block
				rounded-lg
				p-px hover:rotate-180 duration-700
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]'
					>
						<div className='px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
							<MovingIcon sx={{ fontSize: 35 }}></MovingIcon>
						</div>
					</div>
					<div>
						<p className='text-[38px]'>95%</p>
						<p className='text-[gray] text-[15px] -mt-2'>Трудоустройство</p>
					</div>
				</div>
				<div className='flex items-center gap-4 '>
					<div
						className='
				inline-block
				rounded-lg
				p-px hover:rotate-180 duration-700
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]'
					>
						<div className='px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
							<KeyboardDoubleArrowRightIcon
								sx={{ fontSize: 35 }}
							></KeyboardDoubleArrowRightIcon>
						</div>
					</div>
					<div>
						<p className='text-[38px]'>200+</p>
						<p className='text-[gray] text-[15px] -mt-2 ml-2'>
							Реальных проектов
						</p>
					</div>
				</div>
				<div className='flex items-center gap-4 '>
					<div
						className='
				inline-block
				rounded-lg
				p-px hover:rotate-180 duration-700
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]'
					>
						<div className='px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
							<HandshakeIcon sx={{ fontSize: 35 }}></HandshakeIcon>
						</div>
					</div>
					<div>
						<p className='text-[38px]'>30+</p>
						<p className='text-[gray] text-[15px] -mt-2 ml-2'>Партнёров</p>
					</div>
				</div>
			</section>
			<section className='flex flex-col gap-12 mt-10'>
				<aside className='flex items-end justify-between'>
					<div>
						<h2 className='text-[40px]'>Твой путь в IT</h2>
						<p className='text-[gray]'>Мы рядом на каждом этапе твоего роста</p>
					</div>
					<Button>
						Подробнее о методе <ArrowForwardIcon></ArrowForwardIcon>
					</Button>
				</aside>
				<aside className='flex items-start justify-between gap-10'>
					<RoadCard
						icon={<MenuBookIcon sx={{ fontSize: 35 }}></MenuBookIcon>}
						number='01'
						title='Начинаешь с нуля'
						description='Даже если ты никогда не писал код — мы научим.'
					></RoadCard>
					<RoadCard
						icon={
							<WorkspacePremiumIcon
								sx={{ fontSize: 35 }}
							></WorkspacePremiumIcon>
						}
						number='02'
						title='Учишься на практике'
						description='Получишь реальный опыт работы в команде.'
					></RoadCard>
					<RoadCard
						icon={<PeopleIcon sx={{ fontSize: 35 }}></PeopleIcon>}
						number='03'
						title='Попадаешь в комьюнити'
						description='Окружение, которое мотивирует и помогает расти.'
					></RoadCard>
					<RoadCard
						icon={<FolderIcon sx={{ fontSize: 35 }}></FolderIcon>}
						number='04'
						title='Собираешь портфолио'
						description='Проекты, которые не стыдно показать.'
					></RoadCard>
					<RoadCard
						icon={
							<BusinessCenterIcon sx={{ fontSize: 35 }}></BusinessCenterIcon>
						}
						number='05'
						title='Получаешь первую работу'
						description='Карьерная поддержка и помощь с трудоустройством.'
					></RoadCard>
				</aside>
			</section>
			<section
				className='rounded-2xl bg-white/5 border border-white/20
	shadow-2xl
	px-8 py-5 mt-10 flex flex-col gap-5'
			>
				<aside className='flex items-start gap-5'>
					<div className='w-[30%] flex flex-col gap-3 items-start'>
						<h3 className='text-[30px] font-bold'>
							Реальные результаты наших студентов
						</h3>
						<Button>
							Смотреть все истории <ArrowForwardIcon></ArrowForwardIcon>
						</Button>
					</div>
					<div className='w-[70%] flex flex-col gap-2'>
						<div className='flex gap-2'>
							<StudentCard
								img={<PeopleIcon></PeopleIcon>}
								desc='Frontend Developer в Delmobil'
								name='Сомони Рахимов'
							></StudentCard>
							<StudentCard
								img={<PeopleIcon></PeopleIcon>}
								desc='Backend Developer в Avito'
								name='Мухаммад Юсуфов'
							></StudentCard>
							<StudentCard
								img={<PeopleIcon></PeopleIcon>}
								desc='Frontend Intern в Tcell'
								name='Фарида Саидова'
							></StudentCard>
						</div>
						<div className='flex gap-2'>
							<StudentCard
								img={<PeopleIcon></PeopleIcon>}
								desc='Frontend Developer в Delmobil'
								name='Сомони Рахимов'
							></StudentCard>
							<StudentCard
								img={<PeopleIcon></PeopleIcon>}
								desc='Backend Developer в Avito'
								name='Мухаммад Юсуфов'
							></StudentCard>
							<StudentCard
								img={<PeopleIcon></PeopleIcon>}
								desc='Frontend Intern в Tcell'
								name='Фарида Саидова'
							></StudentCard>
						</div>
					</div>
				</aside>
				<hr></hr>
				<aside className='flex items-center gap-5 h-10'>
					<p className='text-[gray] w-[26%]'>Наши выпускники работают в:</p>
					<Swiper
						modules={[Autoplay, FreeMode]}
						slidesPerView={4}
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
			</section>
		</div>
	)
}
