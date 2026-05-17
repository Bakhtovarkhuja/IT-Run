import logo from '@/app/photos/logo.png'
import Image from 'next/image'
import Button from '@/app/components/buttons/button1'
import Button2 from '@/app/components/buttons/button2'
import Link from 'next/link'

export default function Header() {
	return (
		<div className='fixed z-50 top-0 right-0 left-0 
bg-white/0
backdrop-blur-xl
shadow-2xl
'>
			<nav
				className='flex m-auto  w-300 items-center justify-between'
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
		</div>
	)
}
