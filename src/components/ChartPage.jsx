import style from "./ChartPage.module.css"

import pieChart	from "../assets/piechart.png"
import lineChart from "../assets/linechart.png"

import { SiMealie } from "react-icons/si"
import { FaCalendar } from "react-icons/fa"

function ChartPage () {
	return (
		<>
			<div className={style.page}>
				<div className={style.infoOutFrame}>
					<img src={pieChart} className={style.pieChart} />
					<div className={style.infoFrame}>
						<div className={style.infoBox}>
							<div className={style.option}>
								<SiMealie className={style.optionIcon} />
								餐飲
							</div>
							<div className={style.info}>75%</div>
							<div className={style.info}>NT$4,000</div>
						</div>
					</div>
				</div>
				<div className={style.infoOutFrame}>
					<img src={lineChart} className={style.lineChart} />
					<div className={style.infoFrame}>
						<div className={style.infoBox}>
							<div className={style.option}>總額</div>
							<div className={style.info}>-NT$5, 239</div>
							<div className={style.info}>NT$17,543</div>
						</div>
						<div className={style.infoBox}>
							<div className={style.option}>
								<FaCalendar className={style.optionIcon} />
								3/29
							</div>
							<div className={style.info}>-NT$5, 239</div>
							<div className={style.info}>NT$17,543</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ChartPage