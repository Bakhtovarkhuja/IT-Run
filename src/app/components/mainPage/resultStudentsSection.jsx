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

export default function ResultStudentsSection(){
	return (
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
						<Button2>
							Смотреть все истории <ArrowForwardIcon></ArrowForwardIcon>
						</Button2>
					</div>
					<div className='w-[70%] flex flex-col gap-2'>
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
	)
}