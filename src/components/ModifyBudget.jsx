import { useState } from "react"

import style from "./ModifyBudget.module.css"

function ModifyBudget ({handleShowEle, handleBudget, budget}) {
	const [inputBudget, setInputBudget] = useState(budget);
	
	return (
		<>
			<div className={style.pageEle}>
				<div className={style.title}>修改預算</div>
				<input
					className={style.inputEle}
					type="text"
					defaultValue={budget}
					value={inputBudget}
					onChange={(e) => setInputBudget(e.target.value)}
				/>
				<div className={style.btnFrame}>
					<div className={style.noBtn} onClick={() => handleShowEle(false)}>取消</div>
					<div
						className={style.yesBtn}
						onClick={() => {
							handleShowEle(false)
							handleBudget(inputBudget)
						}}
					>確定</div>
				</div>
			</div>
		</>
	)
}

export default ModifyBudget