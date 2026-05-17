import logo from "@/app/photos/logo.png"
import Image from "next/image"
import Button from "@/app/components/buttons/button1"
import Button2 from "@/app/components/buttons/button2"

export default function Header() {
	return (
		<nav className="flex items-center justify-between fixed top-2 left-1/2 -translate-x-1/2
w-[90%] max-w-6xl
rounded-2xl
bg-white/10
backdrop-blur-xl
border border-white/20
shadow-2xl
px-4 py-2">
			<div className="w-[70px]">
				<Image className="w-[100%]" src={logo} alt="logo" />
			</div>
			<ul className="flex gap-[50px] text-[white]">
				<li>Главная</li>
				<li>Курсы</li>
				<li>О нас</li>
				<li>Менторы</li>
				<li>Контакты</li>
			</ul>
			<div className="flex gap-4">
				<Button>Войти</Button>
				<Button2>Оставить заявку</Button2>
			</div>
		</nav>
	)
}