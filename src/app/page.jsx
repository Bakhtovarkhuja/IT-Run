'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import Button from './components/buttons/button1'
import Button2 from './components/buttons/button2'
import Image from 'next/image'
import bg from '@/app/photos/heroSectionPhoto.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PeopleIcon from '@mui/icons-material/People'
import MovingIcon from '@mui/icons-material/Moving'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import HandshakeIcon from '@mui/icons-material/Handshake'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import FolderIcon from '@mui/icons-material/Folder'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import RoadCard from '@/app/components/roadCard/roadCard'
import StudentCard from '@/app/components/studentCard/studentCard'
import itrun from '@/app/photos/itrun.png'
import eskhata from '@/app/photos/eskhata.png'
import alif from '@/app/photos/alif.png'
import wilddberis from '@/app/photos/widdberis.png'
import avito from '@/app/photos/avito.png'
import ds from '@/app/photos/ds.png'

export default function Home() {
	return (
		<div className='max-w-300 m-auto mt-35 mb-10 flex flex-col gap-10'>
			<header className='flex '>
				<aside className='w-[50%]'>
					<div className='inline-flex items-center gap-2 rounded-full bg-[rgb(5, 3, 18)] border border-[rgb(163,14,108)] px-4 py-1.5 mb-6 text-white'>
						<span className='text-primary text-[rgb(163,14,108)] text-sm font-medium flex items-center gap-1.5'>
							<FiberManualRecordIcon
								sx={{ fontSize: 12 }}
							></FiberManualRecordIcon>
							<span>№1 IT-академия в Таджикистане</span>
						</span>
					</div>

					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-white'>
						Построй карьеру в IT вместе с{' '}
						<span className='text-primary text-[rgb(163,14,108)]'>
							новым поколением
						</span>
					</h1>

					<p className='text-lg text-[gray] text-muted-foreground mb-8 max-w-lg'>
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
									className='w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium text-foreground text-white'
								>
									{String.fromCharCode(64 + i)}
								</div>
							))}
						</div>
						<div>
							<p className='text-sm text-white font-medium text-foreground'>
								{'1000+ студентов уже с нами'}
							</p>
							<p className='text-xs text-[gray] text-muted-foreground'>
								{'95% трудоустройство наших выпускников'}
							</p>
						</div>
					</div>
				</aside>
				<aside className='w-[50%]'>
					<Image className='' src={bg} alt='olimjon'></Image>
				</aside>
			</header>
			<section
				className='
	flex items-center justify-between
	rounded-2xl
	bg-white/5
	border border-white/20
	shadow-2xl
	px-18 py-5'
			>
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
							<PeopleIcon sx={{ fontSize: 35 }}></PeopleIcon>
						</div>
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
				<div className='h-0.5 rounded-full w-full bg-[#3a0f4c]'></div>
				<aside className='flex items-center gap-5'>
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
							<div className='w-40 h-20 flex items-center justify-center'>
								<Image className='w-30' src={itrun} alt='itrun' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='w-40 h-20 flex items-center justify-center'>
								<Image className='w-40' src={eskhata} alt='eskhata' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='w-40 h-20 flex items-center justify-center'>
								<Image className='w-40' src={wilddberis} alt='wildberries' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='w-40 h-20 flex items-center justify-center'>
								<Image className='w-40' src={avito} alt='avito' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='w-40 h-20 flex items-center justify-center'>
								<Image className='w-40' src={ds} alt='ds' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='w-40 h-20 flex items-center justify-center'>
								<Image className='w-40' src={alif} alt='alif' />
							</div>
						</SwiperSlide>
					</Swiper>
				</aside>
			</section>
		</div>
	)
}
