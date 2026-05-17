import logo from '@/app/photos/logo.png'
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
			<div className='flex items-center justify-between'>
				<div>
					<Link href='/'>
						<Image className='w-17.5' src={logo} alt='logo'></Image>
					</Link>
				</div>
				<ul className='flex items-center gap-5 text-gray-400'>
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
				<div className='flex items-center gap-4'>
					<InstagramIcon></InstagramIcon>
					<TelegramIcon></TelegramIcon>
					<InstagramIcon></InstagramIcon>
					<TelegramIcon></TelegramIcon>
				</div>
			</div>
			<div className='h-0.5 rounded-full w-full bg-[#3a0f4c]'></div>
			<div>
				<i className='text-[15px] text-gray-400'>
					© 2024 IT Academy. Все права защищены.
				</i>
			</div>
		</div>
	)
}
