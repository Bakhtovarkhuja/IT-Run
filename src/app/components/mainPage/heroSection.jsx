import Button from '@/app/components/buttons/button1'
import Button2 from '@/app/components/buttons/button2'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import logo from '@/app/photos/logo3.png'

export default function HeroSection(){
	return (
		<section>
				<div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center flex-col lg:flex-row gap-10 lg:gap-20'>
						<div>
							<div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-600 dark:border-cyan-500/25 dark:bg-cyan-500/8 dark:text-cyan-400 text-xs font-semibold mb-6 uppercase tracking-widest'>
								<span className='w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-cyan-400 animate-pulse' />
								С 2020 года · Худжанд & Душанбе
							</div>
							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-6'>
								Программирование —
								<span className='bg-linear-to-r text-[#ff7b00] bg-clip-text '>
									{`язык будущего`}
								</span>
								<span>{`/>`}</span>
							</h1>
							<p className='text-slate-400 text-lg leading-relaxed mb-8 max-w-xl'>
								{/* Умение программировать так же важно, как умение читать. Это требование рынка и нового мира. <strong className='text-black dark:text-[white]'>«Новый Алгоритм»</strong> — это место, где молодёжь Таджикистана открывает для себя IT. */}
								От первого кода до первой работы в tech.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 mb-10'>
								<Button2>
									Начать обучение
									<ArrowForwardIcon></ArrowForwardIcon>
								</Button2>
								<Button>Смотреть программы</Button>
							</div>

							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='flex -space-x-2'>
									{[1, 2, 3, 4, 5].map(i => (
										<div
											key={i}
											className='w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium text-foreground'
										>
											{String.fromCharCode(64 + i)}
										</div>
									))}
								</div>
								<div>
									<p className='text-sm font-medium text-foreground'>
										{'1000+ студентов уже с нами'}
									</p>
									<p className='text-xs text-[gray] text-muted-foreground'>
										{'95% трудоустройство наших выпускников'}
									</p>
								</div>
							</div>
						</div>
						<div
							className={`reveal w-[80%] lg:w-full flex items-center justify-center`}
							style={{ transitionDelay: '150ms' }}
						>
							<div className='relative w-95 h-95'>
								<div className='absolute -inset-6 rounded-full border border-[#70707083] dark:border-white/5 spin-slow' />
								<div className='absolute inset-0 rounded-full border border-[#4d444481] dark:border-white/5 spin-slow' />
								<div
									className='absolute inset-6 rounded-full border border-[#8a313170] dark:border-cyan-500/15 spin-slow'
									style={{
										animationDirection: 'reverse',
										animationDuration: '15s',
									}}
								/>
								<div
									className='absolute inset-12 rounded-full border border-[#8000807e] dark:border-violet-500/15 spin-slow'
									style={{ animationDuration: '25s' }}
								/>

								<div className='absolute inset-0 flex items-center justify-center'>
									<div
										className='float w-60 rounded-4xl border border-white/10 bg-linear-to-br bg-[p#070c19]
backdrop-blur-sm dark:from-[#070c19] p-6 text-center shadow-2xl shadow-black/50'
									>
										<div className='w-22 h-14 rounded-xl flex items-center justify-center mx-auto mb-4'>
											<span>
												{' '}
												<Image src={logo} />{' '}
											</span>
										</div>
										<div className='font-bold text-3xl mb-1'>IT-Run</div>
										<div className='text-[13px] text-[gray]'>Academy</div>
										<div className='mt-3 text-xs mt-15 text-slate-500'>
											IT Academy · с 2020
										</div>
									</div>
								</div>

								{[
									{
										label: '1500+ учеников',
										top: '4%',
										left: '50%',
										color:
											' border-blue-600 bg-white/0 backdrop-blur-xl dark:bg-cyan-500/20 dark:border-cyan-500/30 dark:text-cyan-400',
									},
									{
										label: '150+ трудоуст.',
										top: '50%',
										left: '90%',
										color:
											'border-orange-600 bg-white/0 backdrop-blur-xl  dark:bg-amber-500/20 dark:border-amber-500/30 dark:text-amber-400',
									},
									{
										label: '2 центра',
										top: '99%',
										left: '50%',
										color:
											'border-purple-600 bg-white/0 backdrop-blur-xl dark:bg-violet-500/20 dark:border-violet-500/30 dark:text-violet-400',
									},
									{
										label: '6 года',
										top: '50%',
										left: '2%',
										color:
											'border-green-600 bg-white/0 backdrop-blur-xl dark:bg-emerald-500/20 dark:border-emerald-500/30 dark:text-emerald-400',
									},
								].map(b => (
									<div
										key={b.label}
										className={`absolute text-xs font-semibold px-3 py-1.5 rounded-full border ${b.color} -translate-x-1/2 -translate-y-1/2 whitespace-nowrap`}
										style={{ top: b.top, left: b.left }}
									>
										{b.label}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
	)
}