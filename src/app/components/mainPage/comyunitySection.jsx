import itCurs from '@/app/photos/itCurs.png'
import demoDay from '@/app/photos/demoDay.png'
import dostijeniya from '@/app/photos/dostijeniya.png'
import khakaton from '@/app/photos/khakaton.png'
import trening from '@/app/photos/trening.png'
import Image from 'next/image'
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined'
import TelegramIcon from '@mui/icons-material/Telegram'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import WifiOffIcon from '@mui/icons-material/WifiOff'
import Button2 from '../buttons/button2'

export default function ComyunitySection() {
	return (
		<section className='rounded-2xl bg-white/5 border border-white/20 shadow-2xl px-8 py-5 mt-10 gap-5 flex flex-col md:items-start mx-5 lg:flex-row'>
			<aside className='flex flex-col gap-5 lg:w-[30%]'>
				<div>
					<h4 className='text-[30px] font-bold'>
						Комьюнити, которое <br className='hidden sm:block'/> двигает вперёд
					</h4>
					<p className='text-[gray]'>
						Ты не просто учишься — ты <br /> становишься частью IT-сообщества.
					</p>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='flex items-center gap-2'>
						<KeyboardCommandKeyOutlinedIcon
							sx={{ color: 'orange' }}
						></KeyboardCommandKeyOutlinedIcon>
						<p className='text-[gray]'>Xакатоны и митапы</p>
					</div>
					<div className='flex items-center gap-2'>
						<TelegramIcon sx={{ color: 'orange' }}></TelegramIcon>
						<p className='text-[gray]'>Telegram & Discord</p>
					</div>
					<div className='flex items-center gap-2'>
						<Diversity3Icon sx={{ color: 'orange' }}></Diversity3Icon>
						<p className='text-[gray]'>Нетворкинг и друзья</p>
					</div>
					<div className='flex items-center gap-2'>
						<WifiOffIcon sx={{ color: 'orange' }}></WifiOffIcon>
						<p className='text-[gray]'>Офлайн-встречи</p>
					</div>
				</div>
				<Button2>Присоединиться к сообществу</Button2>
			</aside>
			<aside className='flex flex-col md:flex-row lg:w-[70%] rounded-2xl overflow-hidden'>
				<div className='relative overflow-hidden'>
					<div className='absolute inset-0 bg-black/30 z-10'></div>
					<Image
						src={demoDay}
						alt='demoDay'
						className='w-full h-92 object-cover'
					/>

					<div className='flex items-center gap-2 absolute bottom-5 left-5 z-20 text-white'>
						<div className='h-10 w-1 bg-orange-500 rounded-full'></div>

						<div>
							<b>Demo day</b>
							<p>and Job Fair</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col text-[12px] sm:text-[14px]'>
					<div className='flex'>
						<div className='w-full text-[white]'>
							<div className=' relative'>
								<div className='h-full w-full bg-black/30 absolute top-0'></div>
								<Image
									src={itCurs}
									alt='itCurs'
									className='w-full h-46 object-cover'
								/>
								<div className='flex items-center gap-2 absolute bottom-5 left-5'>
									<div className='h-10 w-1 rounded-full bg-[orange]'></div>
									<div>
										<b>IT курсы</b>
										<p>для подростков</p>
									</div>
								</div>
							</div>
						</div>
						<div className='w-full text-[white]'>
							<div className=' relative'>
								<div className='h-full w-full bg-black/30 absolute top-0'></div>
								<Image
									src={trening}
									alt='trening'
									className='w-full h-46 object-cover'
								/>
								<div className='flex items-center gap-2 absolute bottom-5 left-5'>
									<div className='h-10 w-1 rounded-full bg-[orange]'></div>
									<div>
										<b>Тренинг по</b>
										<p>развитию навыков</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex'>
						<div className='w-full text-[white]'>
							<div className=' relative'>
								<div className='h-full w-full bg-black/30 absolute top-0'></div>
								<Image
									src={khakaton}
									alt='khakaton'
									className='w-full h-46 object-cover'
								/>
								<div className='flex items-center gap-2 absolute bottom-5 left-5'>
									<div className='h-10 w-1 rounded-full bg-[orange]'></div>
									<div>
										<b>Хакатон</b>
										<p>и Job Fair</p>
									</div>
								</div>
							</div>
						</div>
						<div className='w-full text-[white]'>
							<div className=' relative'>
								<div className='h-full w-full bg-black/30 absolute top-0'></div>
								<Image
									src={dostijeniya}
									alt='dostijeniya'
									className='w-full h-46 object-cover'
								/>
								<div className='flex items-center gap-2 absolute bottom-5 left-5'>
									<div className='h-10 w-1 rounded-full bg-[orange]'></div>
									<div>
										<b>Достижения</b>
										<p>наших учеников</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</section>
	)
}
