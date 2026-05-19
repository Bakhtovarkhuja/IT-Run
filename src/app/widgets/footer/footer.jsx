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
			<div className='flex items-center justify-between'>
				<div>
					<Link href='/'>
						<Image className='w-22' src={logo} alt='logo'></Image>
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
					<InstagramIcon sx={{ color: 'var(--foreground)' }}></InstagramIcon>
					<TelegramIcon sx={{ color: 'var(--foreground)' }}></TelegramIcon>
					<InstagramIcon sx={{ color: 'var(--foreground)' }}></InstagramIcon>
					<TelegramIcon sx={{ color: 'var(--foreground)' }}></TelegramIcon>
				</div>
			</div>
			<hr/>
			<div>
				<i className='text-[15px] text-gray-400'>
					© 2024 IT Academy. Все права защищены.
				</i>
			</div>
		</div>
	)
}
