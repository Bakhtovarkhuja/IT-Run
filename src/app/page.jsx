import HeroSection from './components/mainPage/heroSection'
import SecondSection from './components/mainPage/secondSection'
import ProccesSection from './components/mainPage/proccesSection'
import ResultStudentsSection from './components/mainPage/resultStudentsSection'
import ComyunitySection from './components/mainPage/comyunitySection'
import TestSection from './components/mainPage/testSection'

export default function Home() {
	return (
		<div className='max-w-300 m-auto mt-35 mb-10 flex flex-col gap-10'>
			<HeroSection></HeroSection>
			<SecondSection></SecondSection>
			<ProccesSection></ProccesSection>
			<ResultStudentsSection></ResultStudentsSection>
			<ComyunitySection></ComyunitySection>
			<TestSection></TestSection>
		</div>
	)
}
