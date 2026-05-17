export default function StudentCard({ img, desc, name }) {
	return (
		<div
			className="
				w-[33%]
				flex
				rounded-lg
				p-px
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				hover:scale-105 duration-300
				animate-[gradientMove_5s_linear_infinite]
			"
		>
			<div className="w-full flex flex-col px-3 py-3 rounded-[7px] bg-[rgb(24,4,34)]">
				<div className="flex items-start gap-3">
					<div className="flex items-center justify-center bg-gray-500 p-4 rounded-full">
						{img}
					</div>

					<div>
						<b>{name}</b>

						<p className="text-[13px] text-gray-400">
							{desc}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}