import style from "./OverviewPage.module.css"

import pieChart	from "../assets/piechart.png"
import lineChart from "../assets/linechart.png"

import { SiMealie } from "react-icons/si";
import { FaCarAlt } from "react-icons/fa";

function OverViewPage () {
	return (
		<>
			<div className={style.page}>
				<div className={style.pageTitle}>Clare, 歡迎回來!</div>
				<div className={style.eleFrameInfo}>
					<div className={style.boxOutframe}>
						<div className={style.infoBox}>
							<div className={style.infoBoxTitle}>總額</div>
							<div className={style.infoBoxContent}>NT$4,000</div>
							<div className={style.infoBoxTime}>2026-03-28</div>
						</div>
						<div className={style.boxFrame}>
							<div className={style.infoBox}>
								<div className={style.infoBoxTitle}>收入</div>
								<div className={style.infoBoxContent}>NT$4,000</div>
								<div className={style.infoBoxTime}>2026-03-28</div>
							</div>
							<div className={style.infoBox}>
								<div className={style.infoBoxTitle}>支出</div>
								<div className={style.infoBoxContent}>NT$4,000</div>
								<div className={style.infoBoxTime}>2026-03-28</div>
							</div>
						</div>
					</div>
					<div className={style.chartFrame}>
						<div className={style.chartTitle}>支出分布</div>
						<img src={pieChart} className={style.pieChart}/>
					</div>
				</div>
				<div className={style.eleFrameSpending}>
					<div className={style.spending}>
						<div className={style.spendingOutframe}>
							<div className={style.spendingBox}>
								<SiMealie className={style.icon} />
								<div className={style.spendingInfo}>
									<div className={style.spendingTitle}>Dinner</div>
									<div className={style.spendingDate}>2026-03-28</div>
								</div>
							</div>
							<div className={style.spendingPrice}>NT$200</div>
						</div>
						<div className={style.spendingOutframe}>
							<div className={style.spendingBox}>
								<FaCarAlt className={style.icon} />
								<div className={style.spendingInfo}>
									<div className={style.spendingTitle}>Car Expense</div>
									<div className={style.spendingDate}>2026-03-28</div>
								</div>
							</div>
							<div className={style.spendingPrice}>NT$200</div>
						</div>
						<div className={style.spendingOutframe}>
							<div className={style.spendingBox}>
								<FaCarAlt className={style.icon} />
								<div className={style.spendingInfo}>
									<div className={style.spendingTitle}>Car Expense</div>
									<div className={style.spendingDate}>2026-03-28</div>
								</div>
							</div>
							<div className={style.spendingPrice}>NT$200</div>
						</div>
					</div>
					<div className={style.chartFrame}>
						<div className={style.chartTitle}>支出分布</div>
						<img src={lineChart} className={style.lineChart}/>
					</div>
				</div>
			</div>
		</>
	)
}

export default OverViewPage