'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import Button2 from '@/app/components/buttons/button2'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StudentCard from '@/app/components/studentCard/studentCard'
import it from '@/app/photos/logo3.png'
import eskhata from '@/app/photos/eskhata.png'
import alif from '@/app/photos/alif.png'
import wilddberis from '@/app/photos/widdberis.png'
import avito from '@/app/photos/avito.png'
import ds from '@/app/photos/ds.png'
import olimjon from '@/app/photos/mentor.png'

export default function ResultStudentsSection() {
	return (
		<section
			className='rounded-2xl bg-white/5 border border-white/20
	shadow-2xl
	px-8 py-5 sm:mt-10 flex flex-col gap-5 mx-5'
		>
			<aside className='flex gap-5 flex-col lg:flex-row'>
				<div className='lg:w-[30%] flex flex-col gap-3 sm:items-start'>
					<h3 className='text-[26px] md:text-[30px] font-bold'>
						Реальные результаты наших студентов
					</h3>
					<Button2>
						Смотреть все истории <ArrowForwardIcon></ArrowForwardIcon>
					</Button2>
				</div>
				<div className='hidden lg:w-[70%] md:w-full md:flex md:flex-col md:gap-2'>
					<div className='flex gap-2'>
						<StudentCard
							img={olimjon}
							desc='Frontend Developer в Delmobil'
							name='Сомони Рахимов'
						></StudentCard>
						<StudentCard
							img={olimjon}
							desc='Backend Developer в Avito'
							name='Мухаммад Юсуфов'
						></StudentCard>
						<StudentCard
							img={olimjon}
							desc='Frontend Intern в Tcell'
							name='Фарида Саидова'
						></StudentCard>
					</div>
					<div className='flex gap-2'>
						<StudentCard
							img={olimjon}
							desc='Frontend Developer в Delmobil'
							name='Сомони Рахимов'
						></StudentCard>
						<StudentCard
							img={olimjon}
							desc='Backend Developer в Avito'
							name='Мухаммад Юсуфов'
						></StudentCard>
						<StudentCard
							img={olimjon}
							desc='Frontend Intern в Tcell'
							name='Фарида Саидова'
						></StudentCard>
					</div>
				</div>
				<div className='md:hidden flex flex-col gap-2'>
					<StudentCard
						img={olimjon}
						desc='Frontend Developer в Delmobil'
						name='Сомони Рахимов'
					></StudentCard>
					<StudentCard
						img={olimjon}
						desc='Frontend Developer в Delmobil'
						name='Сомони Рахимов'
					></StudentCard>
					<StudentCard
						img={olimjon}
						desc='Frontend Developer в Delmobil'
						name='Сомони Рахимов'
					></StudentCard>
					<StudentCard
						img={olimjon}
						desc='Frontend Developer в Delmobil'
						name='Сомони Рахимов'
					></StudentCard>
					<StudentCard
						img={olimjon}
						desc='Frontend Developer в Delmobil'
						name='Сомони Рахимов'
					></StudentCard>
				</div>
			</aside>
			<hr></hr>
			<aside className='flex flex-col lg:flex-row items-center gap-5 lg:gap-10'>
				<p className='text-[gray] w-full lg:w-[30%] text-center lg:text-left text-sm sm:text-base'>
					Наши выпускники работают в:
				</p>

				<Swiper
					modules={[Autoplay, FreeMode]}
					spaceBetween={20}
					loop={true}
					freeMode={true}
					allowTouchMove={false}
					speed={5000}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
					breakpoints={{
						0: {
							slidesPerView: 3,
						},
						640: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
					className='w-full'
				>
					<SwiperSlide>
						<div className='w-full h-14 flex items-center justify-center'>
							<Image
								className='w-20 sm:w-24 lg:w-25 object-contain'
								src={it}
								alt='itrun'
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='w-full h-14 flex items-center justify-center'>
							<Image
								className='w-24 sm:w-30 lg:w-35 object-contain'
								src={eskhata}
								alt='eskhata'
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='w-full h-14 flex items-center justify-center'>
							<Image
								className='w-24 sm:w-30 lg:w-35 object-contain'
								src={wilddberis}
								alt='wildberries'
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='w-full h-14 flex items-center justify-center'>
							<Image
								className='w-20 sm:w-28 lg:w-35 object-contain'
								src={avito}
								alt='avito'
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='w-full h-14 flex items-center justify-center'>
							<Image
								className='w-20 sm:w-28 lg:w-35 object-contain'
								src={ds}
								alt='ds'
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='w-full h-14 flex items-center justify-center'>
							<Image
								className='w-20 sm:w-28 lg:w-35 object-contain'
								src={alif}
								alt='alif'
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</aside>
		</section>
	)
}
