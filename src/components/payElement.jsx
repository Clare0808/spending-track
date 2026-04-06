import style from "./payElement.module.css"

import { SiMealie } from "react-icons/si"
import { FaCarAlt } from "react-icons/fa"
import { IoSchool } from "react-icons/io5"

const icon = {
	meal: SiMealie,
	transport: FaCarAlt,
	education: IoSchool
}

export function IconBox ({iconType}) {
	const IconType = icon[iconType];
	return IconType ? <IconType className={style.icon} /> : <SiMealie className={style.icon} />;
}

export function PayElement ({className, result, inputText, iconType, paymentType, paymentDate}) {
	return (
		<>
			<div className={`${style.spendingOutframe} ${className}`}>
				<div className={style.spendingBox}>
					<IconBox iconType={iconType} />
					<div className={style.spendingInfo}>
						<div className={style.spendingTitle}>
							<span>{paymentType || "收入"} - </span>
							{inputText || "Dinner"}
						</div>
						<div className={style.spendingTime}>{paymentDate}</div>
					</div>
				</div>
				<div className={style.spendingPrice}>NT${result || 0}</div>
			</div>
		</>
	)
}

export default PayElement