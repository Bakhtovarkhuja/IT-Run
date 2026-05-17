import logo from "@/app/photos/logo.png"
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer (){
	return (
		<div className='text-white'>
			<div className='flex items-center justify-between'>
				<div>
					<Image className='w-17.5' src={logo} alt="logo"></Image>
				</div>
				<ul className='flex items-center gap-[17px] text-gray-400'>
					<li>Курсы</li>
					<li>О нас</li>
					<li>Студентам</li>
					<li>Блог</li>
					<li>Контакты</li>
				</ul>
				<div className='flex items-center gap-[15px]'>
					<InstagramIcon></InstagramIcon>
					<TelegramIcon></TelegramIcon>
					<InstagramIcon></InstagramIcon>
					<TelegramIcon></TelegramIcon>
				</div>
			</div>
		</div>
	)
}