import logo from '@/app/photos/logo.png'
import Image from 'next/image'
import Button from '@/app/components/buttons/button1'
import Button2 from '@/app/components/buttons/button2'
import Link from 'next/link'

export default function Header() {
	return (
		<nav
			className='
	fixed top-3 left-1/2 -translate-x-1/2
	w-[95%] max-w-300
	flex items-center justify-between
	rounded-2xl
	bg-white/10
	backdrop-blur-xl
	border border-white/20
	shadow-2xl
	px-4 py-2'
		>
			<div className='w-17.5'>
				<Link href='/'>
					<Image className='w-full' src={logo} alt='logo' />
				</Link>
			</div>
			<ul className='flex gap-8 text-[white]'>
				<Link href='/main'>
					<li>Главная</li>
				</Link>
				<Link href='/courses'>
					<li>Курсы</li>
				</Link>
				<Link href='/about'>
					<li>О нас</li>
				</Link>
				<Link href='/mentor'>
					<li>Менторы</li>
				</Link>
				<Link href='/contact'>
					<li>Контакты</li>
				</Link>
			</ul>
			<div className='flex gap-4'>
				<Button>Войти</Button>
				<Button2>Оставить заявку</Button2>
			</div>
		</nav>
	)
}
