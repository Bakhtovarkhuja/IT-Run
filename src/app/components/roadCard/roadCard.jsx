export default function Card({icon, number, title, description}) {
	return (
		<card className='w-full flex flex-col gap-3'>
			<div className='flex items-center gap-5'>
				<div
					className='
				inline-block
				rounded-lg
				p-px
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%] hover:rotate-180 duration-700
				animate-[gradientMove_5s_linear_infinite]'
				>
					<div className='px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
						{icon}
					</div>
				</div>
				<b className='text-[22px]'>{number}</b>
			</div>
			<div>
				<b className='text-[20px]'>{title}</b>
				<p className='text-[gray] text-[15px]'>
					{description}
				</p>
			</div>
		</card>
	)
}
