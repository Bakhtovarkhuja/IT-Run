export default function Button2({ children }) {
	return (
		<button
			className="

				text-[#ff5100]

				rounded-lg
				p-2
        px-5
				bg-[linear-gradient(90deg,#ff5100,yellow,orange)]
				bg-size-[300%_300%]
				hover:scale-105
				duration-300
				text-white flex items-center gap-2
				"
				// animate-[gradientMove_4s_linear_infinite]
		>
				{children}
		
		</button>
	)
}