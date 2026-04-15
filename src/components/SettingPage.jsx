import { useState, useRef } from "react"
import { CSSTransition } from "react-transition-group";

import style from "./SettingPage.module.css"

import ModifyBudget from "./ModifyBudget"

import userImage from "../assets/user.jpg"

import { SiMealie } from "react-icons/si"
import { FaCarAlt } from "react-icons/fa"
import { IoSchool } from "react-icons/io5"

function SettingPage () {
	const [showEle, setShowEle] = useState(false);
	const [budget, setBudget] = useState("NT$ 5,000");

	const nodeRef = useRef(null);

	const handleShowEle = (data) => {
		setShowEle(data);
	};

	return (
		<>
			<div className={style.page}>
				<div className={style.userInfoFrame}>
					<img src={userImage} className={style.img} />
					<div className={style.dataFrame}>
						<div className={style.infoFrame}>
							<div className={style.infoName}>王小明</div>
							<div className={style.infoBox}>
								<div className={style.infoTitle}>E-mail</div>
								<div className={style.infoData}>example@google.com</div>
							</div>
							<div className={style.infoBox}>
								<div className={style.infoTitle}>電話</div>
								<div className={style.infoData}>0912-345-678</div>
							</div>
						</div>
						<div className={style.otherDataOutFrame}>
							<div className={style.otherDataFrame}>
								<div className={style.otherDataTitle}>紀錄天數</div>
								<div className={style.otherData}>123 天</div>
							</div>
							<div className={style.otherDataFrame}>
								<div className={style.otherDataTitle}>帳單數量</div>
								<div className={style.otherData}>123 天</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.dataManageFrame}>
					<div className={style.labelManageFrame}>
						<div className={style.manageTitle}>標籤管理</div>
						<div className={style.optionFrame}>
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
							<div className={style.option}>新增 +</div>
						</div>
					</div>
				<div className={style.settingBox}>
					<div className={style.budgetManage}>
						<div className={style.manageTitle}>預算設定</div>
						<div className={style.budget}>{budget}</div>
						<div className={style.budgetModifyBtn} onClick={() => handleShowEle(true)}>修改預算</div>
					</div>
					<div className={style.remindBox}>
						<div className={style.manageTitle}>提醒時間設定</div>
						<div className={style.remindTime}>晚上 22:00</div>
						<div className={style.timeModifyBtn}>修改時間</div>
					</div>
				</div>
				</div>

				{showEle ? <div className={style.overlay} onClick={() => handleShowEle(false)}></div> : null}
				<CSSTransition
					nodeRef={nodeRef}
					in={showEle}
					timeout={300}
					classNames={{
						enter: style.fadeEnter,
						enterActive: style.fadeEnterActive,
						exit: style.fadeExit,
						exitActive: style.fadeExitActive,
					}}
					unmountOnExit
				>
					<div className={style.pageEle} ref={nodeRef}>
						<ModifyBudget 
							handleShowEle={handleShowEle}
							handleBudget={setBudget} 
							budget={budget}
						/>
					</div>
				</CSSTransition>
			</div>
		</>
	)
}

export default SettingPage