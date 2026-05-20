import Button2 from '../buttons/button2'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function TestSection() {
	return (
		<div
			className='my-20 border rounded-2xl border-white/8 bg-linear-to-br from-white/[0.04
	backdrop-blur-xl flex flex-col md:flex-row gap-5 md:items-center md:justify-between px-10 py-7 mx-5'
		>
			<div>
				<span className='text-2xl sm:text-3xl lg:text-3xl font-bold text-foreground leading-tight mb-6 text-white'>
					Поможем выбрать направление в IT
				</span>
				<br />
				<span className='text-[gray]'>
					Пройдите тест и получите персональную рекомендацию
				</span>
			</div>
			<Button2>
				Пройти тест <ArrowForwardIcon />
			</Button2>
		</div>
	)
}
