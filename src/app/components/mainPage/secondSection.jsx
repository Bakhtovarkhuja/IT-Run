import Image from 'next/image'
import book from '@/app/photos/book.svg'
import head from '@/app/photos/head.svg'
import bag from '@/app/photos/bag.svg'
import like from '@/app/photos/like.svg'

export default function SecondSection() {
	return (
		<section className='flex items-stretch gap-5 mt-10 flex-wrap px-5'>
			<card className='hover:scale-105 duration-300 w-full sm:w-[48%] md:w-[31%] lg:w-[23.5%] dark:bg-[#070c19] rounded-2xl shadow-2xl px-8 py-5 flex flex-col gap-6 items-center'>
				<div className='flex flex-col gap-2'>
					<b className='text-[38px] text-[orange]'>+4 года</b>
					<b className='text-[18px]'>Опыт преподавания</b>
				</div>
				<Image src={book} alt='Book' className='w-45' />
			</card>
			<card className=' hover:scale-105 duration-300 w-full sm:w-[48%] md:w-[31%] lg:w-[23.5%] dark:bg-[#070c19] rounded-2xl shadow-2xl px-8 py-5 flex flex-col gap-6 items-center'>
				<div className='flex flex-col gap-2'>
					<b className='text-[38px] text-[orange]'>+1,000</b>
					<b className='text-[18px]'>Количество выпускников</b>
				</div>
				<Image src={head} alt='head' className='w-45' />
			</card>
			<card className=' hover:scale-105 duration-300 w-full sm:w-[48%] md:w-[31%] lg:w-[23.5%] dark:bg-[#070c19] rounded-2xl shadow-2xl px-8 py-5 flex flex-col gap-6 items-center'>
				<div className='flex flex-col gap-2 '>
					<b className='text-[38px] text-[orange]'>+74%</b>
					<b className='text-[18px]'>Трудоустроены в IT-компаниях</b>
				</div>
				<Image src={bag} alt='bag' className='w-45' />
			</card>
			<card className=' hover:scale-105 duration-300 w-full sm:w-[48%] md:w-[31%] lg:w-[23.5%] dark:bg-[#070c19] rounded-2xl shadow-2xl px-8 py-5 flex flex-col gap-6 items-center'>
				<div className='flex flex-col gap-2'>
					<b className='text-[38px] text-[orange]'>98%</b>
					<b className='text-[18px]'>Готовы рекомендовать нас</b>
				</div>
				<Image src={like} alt='like' className='w-45' />
			</card>
		</section>
	)
}
