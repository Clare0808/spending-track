import style from "./PaymentPage.module.css";

import { SiMealie } from "react-icons/si";
import { FaCarAlt } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function PaymentPage () {
	return (
		<>
			<div className={style.page}>
				<div className={style.spending}>
					<div className={style.spendingOutframe}>
						<div className={style.spendingBox}>
							<SiMealie className={style.icon} />
							<div className={style.spendingInfo}>
								<div className={style.spendingTitle}>Dinner</div>
								<div className={style.spendingTime}>2026-03-28</div>
							</div>
						</div>
						<div className={style.spendingPrice}>NT$200</div>
					</div>
					<div className={style.spendingOutframe}>
						<div className={style.spendingBox}>
							<FaCarAlt className={style.icon} />
							<div className={style.spendingInfo}>
								<div className={style.spendingTitle}>Car Expense</div>
								<div className={style.spendingTime}>2026-03-28</div>
							</div>
						</div>
						<div className={style.spendingPrice}>NT$200</div>
					</div>
					<div className={style.spendingOutframe}>
						<div className={style.spendingBox}>
							<SiMealie className={style.icon} />
							<div className={style.spendingInfo}>
								<div className={style.spendingTitle}>Dinner</div>
								<div className={style.spendingTime}>2026-03-28</div>
							</div>
						</div>
						<div className={style.spendingPrice}>NT$200</div>
					</div>
				</div>
				<div className={style.dataInputFrame}>
					<div className={style.createSpendingOutframe}>
						<div className={style.spendingBox}>
							<SiMealie className={style.icon} />
							<div className={style.spendingInfo}>
								<div className={style.spendingTitle}>Dinner</div>
								<div className={style.spendingTime}>2026-03-28</div>
							</div>
						</div>
						<div className={style.spendingPrice}>NT$200</div>
					</div>
					<div className={style.typeBox}>
						<div className={style.type}>收入</div>
						<div className={style.type}>支出</div>
					</div>
					<div className={style.inputFrame}>
						<FaCalendar className={style.calendarIcon} />
						<div className={style.inputInFrame}>
							<div className={style.inputBox}>
								<input type="text" placeholder="請輸入內容..." className={style.input} />
								<input type="text" placeholder="請輸入金額..." className={style.input} />
							</div>
							<div className={style.btnFrame}>
								<div className={style.calculaterFrame}>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle}>1</div>
										<div className={style.calculaterEle}>2</div>
										<div className={style.calculaterEle}>3</div>
										<div className={style.calculaterOperator}>+</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle}>4</div>
										<div className={style.calculaterEle}>5</div>
										<div className={style.calculaterEle}>6</div>
										<div className={style.calculaterOperator}>-</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle}>7</div>
										<div className={style.calculaterEle}>8</div>
										<div className={style.calculaterEle}>9</div>
										<div className={style.calculaterOperator}>*</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle}>.</div>
										<div className={style.calculaterZero}>0</div>
										<div className={style.calculaterOperator}>/</div>
									</div>
								</div>
								<div className={style.optionsBox}>
									<div className={style.option}>
										<SiMealie className={style.optionIcon} />
										餐飲
									</div>
									<div className={style.option}>
										<FaCarAlt className={style.optionIcon} />
										交通
									</div>
									<div className={style.option}>
										<IoSchool className={style.optionIcon} />
										教育
									</div>
								</div>
							</div>
						</div>
						<FaCheck className={style.checkIcon} />
					</div>
					
				</div>
			</div>
		</>
	)
}

export default PaymentPage