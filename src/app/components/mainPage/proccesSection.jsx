export default function ProccesSection(){
	return (
		<section className='mb-10 mt-10 flex flex-col justify-between relative'>
				<div>
					<p className='text-[orange] text-[18px]'>акселератор навыков</p>
					<h3 className='text-[40px] font-bold'>
						Процесс учёбы <br /> и карьерного роста!
					</h3>
					<p className='text-[18px] text-[gray]'>
						Получи доступ к курсам по программированию, дизайну, <br />{' '}
						маркетингу и другим сферам в IT для старта своей карьеры
					</p>
				</div>
				<div className='flex my-20'>
					<div className='w-full relative top-40'>
						<div className='relative bg-[gray]'>
							<div className='w-25 h-25 rounded-full bg-[orange] shadow-[0_0_40px_rgb(10,15,20)] absolute z-10'></div>
							<div className='w-full border border-l-black border-t-black rounded-tl-4xl h-35 absolute -top-15 left-10 border-b-0 border-r-0 dark:border-t-[white] dark:border-l-[white]'></div>
						</div>
						<p className='absolute top-10 left-30'>Курсы</p>
					</div>
					<div className='w-full relative top-12'>
						<div className='relative bg-[gray]'>
							<div className='w-25 h-25 rounded-full bg-[orange] shadow-[0_0_40px_rgb(10,15,20)] absolute z-10'></div>
							<div className='w-full border border-l-black border-t-black rounded-tl-4xl h-35 absolute -top-15 left-10 border-b-0 border-r-0 dark:border-t-[white] dark:border-l-[white]'></div>
						</div>
						<p className='absolute top-10 left-30'>Практика</p>
					</div>
					<div className='w-full relative bottom-16'>
						<div className='relative bg-[gray]'>
							<div className='w-25 h-25 rounded-full bg-[orange] shadow-[0_0_40px_rgb(10,15,20)] absolute z-10'></div>
							<div className='w-full border border-l-black border-t-black rounded-tl-4xl h-35 absolute -top-15 left-10 border-b-0 border-r-0 dark:border-t-[white] dark:border-l-[white]'></div>
						</div>
						<p className='absolute top-10 left-30'>Стажировка</p>
					</div>
					<div className='w-full relative bottom-45'>
						<div className='relative bg-[gray]'>
							<div className='w-25 h-25 rounded-full bg-[orange] shadow-[0_0_40px_rgb(10,15,20)] absolute z-10'></div>
							<div className='w-full border border-l-black border-t-black rounded-tl-4xl h-35 absolute -top-15 left-10 border-b-0 border-r-0 dark:border-t-[white] dark:border-l-[white]'></div>
						</div>
						<p className='absolute top-10 left-30'>Работа</p>
					</div>
				</div>
				<div className='text-end'>
					<h3 className='text-[40px] font-bold'>
						Талант, готовый к <br /> работе!
					</h3>
					<p className='text-[18px] text-[gray]'>
						Наша команда обучит тебя, поможет создать свое <br /> портфолио и
						подготовиться к интервью.
					</p>
				</div>
			</section>
	)
}