import Button2 from "../buttons/button2";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


export default function EndSection() {
    return (
        <div className="my-20 rounded-2xl dark:bg-[#070c19] bg-white rounded-2xl shadow-xl  flex items-center justify-between px-10 py-7">
            <div>
                <span className="text-2xl sm:text-5xl lg:text-3xl font-bold text-foreground leading-tight mb-6 dark:text-white">Поможем выбрать направление в IT</span><br />
                <span className="text-[gray]">Пройдите тест и получите персональную рекомендацию</span>
            </div>
            <Button2> Пройти тест <ArrowForwardIcon /></Button2>
        </div>
    )
}