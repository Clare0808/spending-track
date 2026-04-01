import style from "./payElement.module.css"

import { SiMealie } from "react-icons/si"

function PayElement ({className}) {
	return (
		<>
			<div className={`${style.spendingOutframe} ${className}`}>
				<div className={style.spendingBox}>
					<SiMealie className={style.icon} />
					<div className={style.spendingInfo}>
						<div className={style.spendingTitle}>Dinner</div>
						<div className={style.spendingTime}>2026-03-28</div>
					</div>
				</div>
				<div className={style.spendingPrice}>NT$200</div>
			</div>
		</>
	)
}

export default PayElement