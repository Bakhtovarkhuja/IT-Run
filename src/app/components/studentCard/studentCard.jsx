import Image from 'next/image'

export default function StudentCard({ img, desc, name }) {
	return (
			<div className="w-full flex flex-col px-3 py-3 rounded-[7px] dark:bg-[#001d35] bg-white shadow-xl">
				<div className="flex items-start gap-3">
					<div className="max-w-15 max-h-15 rounded-full overflow-hidden">
						<Image className='rounded-full' src={img} alt='olimjon'></Image>
					</div>

					<div>
						<b>{name}</b>

						<p className="text-[13px] text-gray-400">
							{desc}
						</p>
					</div>
				</div>
		</div>
	)
}