export default function Button({ children }) {
	return (
		<div
			className="
				inline-block
				rounded-lg hover:scale-105 duration-300
				p-px
				bg-[linear-gradient(90deg,rgb(5,3,18),gray,white,gray,rgb(5,3,18))]
				bg-size-[300%_300%]
				animate-[gradientMove_5s_linear_infinite]
			"
		>
			<button className="px-4 py-2 rounded-[7px] text-[black] dark:text-white dark:bg-[#070c19] bg-white">
				{children}
			</button>
		</div>
	)
}