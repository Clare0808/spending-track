import style from "./HelpPage.module.css"

import { GoDotFill } from "react-icons/go"
import { IoIosArrowForward } from "react-icons/io"
import { FaRobot } from "react-icons/fa"

function HelpPage () {
	return (
		<>
			<div className={style.page}>
				<div className={style.problemFrame}>
					<div className={style.title}>常見問題</div>
					<div className={style.Frame}>
						<div className={style.problemInFrame}>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.problemBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
						</div>
						<div className={style.answerFrame}>
							<IoIosArrowForward className={style.arrowIcon} />
							<div className={style.answer}>
								常見問題的回答常見問題的回答常見問題的回答<br/>
								常見問題的回答
							</div>
						</div>
					</div>
				</div>
				<div className={style.contactFrame}>
					<div className={style.title}>客服回覆</div>
					<div className={style.cFrame}>
						<div className={style.contactAnswerFrame}>
							<div className={style.answer}>
								常見問題的回答常見問題的回答常見問題的回答<br/>
								常見問題的回答
							</div>
						</div>
						<div className={style.contactInFrame}>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
							<div className={style.contactBox}>
								<GoDotFill className={style.dotIcon} />
								常見問題一常見問題一
							</div>
						</div>
					</div>
				</div>

				<div className={style.robotFrame}>
					<FaRobot className={style.robotIcon} />
				</div>
			</div>
		</>
	)
}

export default HelpPage