import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import CallIcon from '@mui/icons-material/Call'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import Button2 from '../components/buttons/button2'

export default function Page() {
	return (
		<div className='max-w-300 m-auto mt-25 mb-10 '>
			<div>
				<h1 className='text-[48px]'>Контакты</h1>
				<p className='text-[gray] text-[18px]'>
					Есть вопросы? Мы всегда на связи!
				</p>
			</div>
			<section className='flex items-start gap-10'>
				<aside className='w-[35%]'>
					<card className='dark:bg-[#070c19] bg-white rounded-2xl p-7 mt-5 text-white flex flex-col gap-5 shadow-xl'>
						<div className='flex items-start gap-2'>
							<LocationOnOutlinedIcon
								sx={{ color: 'orange' }}
							></LocationOnOutlinedIcon>
							<div>
								<b className='text-black dark:text-white'>Адрес:</b>
								<p className='text-[gray]'>улица Сомони 41, Хуҷанд, Таджикистан</p>
							</div>
						</div>
						<div className='flex items-start gap-2'>
							<CallIcon sx={{ color: 'orange' }}></CallIcon>
							<div>
								<b className='text-black dark:text-white'>Телефон:</b>
								<p className='text-[gray]'>+992 78 330 0220</p>
							</div>
						</div>
						<div className='flex items-start gap-2'>
							<EmailOutlinedIcon sx={{ color: 'orange' }}></EmailOutlinedIcon>
							<div>
								<b className='text-black dark:text-white'>Email:</b>
								<p className='text-[gray]'>info@company.com</p>
							</div>
						</div>
						<div className='flex items-start gap-2'>
							<AccessTimeOutlinedIcon
								sx={{ color: 'orange' }}
							></AccessTimeOutlinedIcon>
							<div>
								<b className='text-black dark:text-white'>Время работы:</b>
								<p className='text-[gray]'>Пн-Пт: 9:00-18:00</p>
							</div>
						</div>
					</card>
				</aside>
				<aside className='dark:bg-[#070c19] bg-white rounded-2xl p-7 mt-5 text-white flex flex-col gap-5 shadow-xl w-[65%] items-end'>
					<div className='flex items-center gap-5 w-full'>
						<input
							type='text'
							placeholder='Ваше имя'
							className='outline-0 rounded-xl py-2 px-3 w-[50%] text-black dark:text-white border-2 dark:border'
						/>
						<input
							type='number'
							placeholder='Номер телефона'
							className='outline-0 rounded-xl py-2 px-3 w-[50%] dark:text-white border-2 dark:border text-black'
						/>
					</div>
					<textarea
						placeholder='Сообщения...'
						className='border-2 rounded-xl outline-0 px-4 py-3 w-full min-h-32 dark:text-white dark:border text-black'
					></textarea>
					<Button2>Регистрация</Button2>
				</aside>
			</section>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.8330003954006!2d69.62546457582022!3d40.27945977146207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa685638cc62f047%3A0x1569e85609b7ec24!2zSVQtUlVOIC0g0LDQutCw0LTQtdC80LjRjyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C-INGB0YLQsNC90LTQsNGA0YLQsA!5e0!3m2!1sru!2s!4v1779187378354!5m2!1sru!2s'
				width='100%'
				height='400'
				style={{ border: 0, borderRadius: '15px', marginTop: '40px' }}
				allowFullScreen=''
				loading='lazy'
			/>
		</div>
	)
}
