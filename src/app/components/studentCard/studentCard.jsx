import Image from 'next/image'

export default function StudentCard({ img, desc, name }) {
	return (
		// <div
		// 	className="
		// 		inline-block
		// 		rounded-lg hover:scale-105 duration-300
		// 		p-px
		// 		bg-[linear-gradient(90deg,rgb(5,3,18),gray,white,gray,rgb(5,3,18))]
		// 		bg-size-[300%_300%]
		// 		animate-[gradientMove_5s_linear_infinite]
		// 	"
		// >
			<div className="w-full flex flex-col px-3 py-3 rounded-[7px] dark:bg-[#070c19] bg-white shadow-xl">
				<div className="flex items-start gap-3">
					<div className="w-15 h-15 rounded-full">
						<Image className='w-15 h-15 rounded-full' src={img} alt='olimjon'></Image>
					</div>

					<div>
						<b>{name}</b>

						<p className="text-[13px] text-gray-400">
							{desc}
						</p>
					</div>
				</div>
			{/* </div> */}
		</div>
	)
}