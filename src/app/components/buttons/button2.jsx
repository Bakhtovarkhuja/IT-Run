export default function Button2({ children }) {
	return (
		<button
			className="
				rounded-lg
				p-px
        px-5
				bg-[linear-gradient(90deg,rgb(163,14,108),rgb(147,43,152),rgb(71,21,147),rgb(163,14,108))]
				bg-size-[300%_300%]
				animate-[gradientMove_4s_linear_infinite]
				hover:scale-105
				duration-300
				text-white flex items-center gap-2
			"
		>
				{children}
		
		</button>
	)
}