import logo from '@/app/photos/logo3.png'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import Link from 'next/link'

export default function Footer() {
	return (
		<div
			className='text-white
			max-w-300 m-auto
	rounded-2xl py-2 flex flex-col gap-3'
		>
			<div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
				<div>
					<Link href='/'>
						<Image className='w-22' src={logo} alt='logo'></Image>
					</Link>
				</div>
				<ul className='flex px-5 md:flex-row flex-col gap-3 md:gap-5 text-gray-400'>
					<Link href='/courses'>
						<li>Курсы</li>
					</Link>
					<Link href='/about'>
						<li>О нас</li>
					</Link>
					<Link href='/student'>
						<li>Студентам</li>
					</Link>
					<Link href='/blog'>
						<li>Блог</li>
					</Link>
					<Link href='/contact'>
						<li>Контакты</li>
					</Link>
				</ul>
				<div className='flex px-5 items-center gap-4'>
					<InstagramIcon sx={{ color: 'var(--foreground)' }}></InstagramIcon>
					<TelegramIcon sx={{ color: 'var(--foreground)' }}></TelegramIcon>
					<InstagramIcon sx={{ color: 'var(--foreground)' }}></InstagramIcon>
					<TelegramIcon sx={{ color: 'var(--foreground)' }}></TelegramIcon>
				</div>
			</div>
			<div className='h-px bg-black dark:bg-white'/>
			<div className='mx-5 mb-5 flex justify-center md:justify-start'>
				<i className='text-[15px] text-gray-400'>
					© 2024 IT Academy. Все права защищены.
				</i>
			</div>
		</div>
	)
}
