import logo from '@/app/photos/logo3.png'
import Image from 'next/image'
import Button from '@/app/components/buttons/button1'
import Button2 from '@/app/components/buttons/button2'
import Link from 'next/link'
import ThemeToggle from '@/app/components/theme-toggle/theme-toggle'

export default function Header() {
	return (
		<div className='fixed z-50 top-0 right-0 left-0 
bg-white/0
backdrop-blur-xl
'>
			<nav
				className='flex m-auto w-300 items-center justify-between'
			>
				<div className='flex items-center'>
					<div className='w-22'>
						<Link href='/'>
							<Image className='w-full' src={logo} alt='logo' />
						</Link>
					</div>
					<div>
						<h1 className='font-bold text-[26px]'>IT-Run </h1>
						<p className='text-[13px] text-[gray] -mt-1.5'>Academy</p>
					</div>
				</div>
				<ul className='flex gap-8'>
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
				<div>
					<ThemeToggle />
				</div>
				<div className='flex gap-4'>
					<Button>Войти</Button>
					<Button2>Оставить заявку</Button2>
				</div>
			</nav>
		</div>
	)
}
