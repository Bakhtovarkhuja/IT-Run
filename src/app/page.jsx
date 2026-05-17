import Button from './components/buttons/button1'
import Button2 from './components/buttons/button2'
import Image from 'next/image'
import bg from '@/app/photos/heroSectionPhoto.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PeopleIcon from '@mui/icons-material/People'
import MovingIcon from '@mui/icons-material/Moving';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HandshakeIcon from '@mui/icons-material/Handshake';


export default function Home() {
	return (
		<div>
			<header className='flex '>
				<aside className='w-[50%]'>
					<div className='inline-flex items-center gap-2 rounded-full bg-[rgb(5, 3, 18)] border border-[rgb(163,14,108)] px-4 py-1.5 mb-6 text-white'>
						<span className='text-primary text-[rgb(163,14,108)] text-sm font-medium'>
							№1 IT-академия в Таджикистане
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
	bg-white/10
	backdrop-blur-xl
	border border-white/20
	shadow-2xl
	px-18 py-5'
			>
				<div className='flex items-center gap-4 '>
					<div
						className='
				inline-block
				rounded-lg
				p-px
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]'>
						<div className='px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
							<PeopleIcon sx={{ fontSize: 35}}></PeopleIcon>
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
				p-px
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]'>
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
				p-px
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]'>
						<div className='px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
							<KeyboardDoubleArrowRightIcon sx={{ fontSize: 35 }}></KeyboardDoubleArrowRightIcon>
						</div>
					</div>
					<div>
						<p className='text-[38px]'>200+</p>
						<p className='text-[gray] text-[15px] -mt-2 ml-2'>Реальных проектов</p>
					</div>
				</div>
				<div className='flex items-center gap-4 '>
					<div
						className='
				inline-block
				rounded-lg
				p-px
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]'>
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
		</div>
	)
}
