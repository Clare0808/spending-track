import { useState } from "react"

import style from "./PaymentPage.module.css"

import PayElement from "./payElement"

import { SiMealie } from "react-icons/si"
import { FaCarAlt } from "react-icons/fa"
import { IoSchool } from "react-icons/io5"
import { FaCalendar } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"

function PaymentPage () {
	const [result, setResult] = useState(0);
	const [calEle, setCalEle] = useState("");
	const [lastOpe, setLastOpe] = useState("");

	const clickBtn = (item) => {
		if (item === "+") {
			setResult((prev) => prev + parseInt(calEle))

			setCalEle("");
			setLastOpe("+");
		} else if (item === "-") {
			setResult((prev) => {
				if (prev === 0) {
					return parseInt(calEle);
				} else {
					return prev - parseInt(calEle)
				}
			});

			setCalEle("");
			setLastOpe("-");
		} else if (item === "*") {
			setResult((prev) => {
				if (prev === 0) {
					return 1;
				} else {
					return prev * parseInt(calEle);
				}
			});

			setCalEle("");
			setLastOpe("*");
		} else if (item === "/") {
			setResult((prev) => {
				if (prev === 0) {
					return parseInt(calEle);
				} else {
					return prev / parseInt(calEle);
				}
			});

			setCalEle("");
			setLastOpe("/");
		} else if (item === "=") {
			const num = parseInt(calEle || "0");

			setResult((prev) => {
				if (lastOpe === "+") {
					return prev + num;
				} else if (lastOpe === "-") {
					return prev - num;
				} else if (lastOpe === "*") {
					return prev * num;
				} else if (lastOpe === "/") {
					return prev / num;
				} else {
					return num;
				}
			})

			setCalEle("");
		} else if (item === "x") {
			setResult(0);
			setCalEle("");
		} else {
			setCalEle((prev) => prev + item);
		}
	};

	return (
		<>
			<div className={style.page}>
				<div className={style.spending}>
					<PayElement />
				</div>
				<div className={style.dataInputFrame}>
					<PayElement className={style.createSpendingOutframe} />
					<div className={style.typeBox}>
						<div className={style.type}>收入</div>
						<div className={style.type}>支出</div>
					</div>
					<div className={style.inputFrame}>
						<FaCalendar className={style.calendarIcon} />
						<div className={style.inputInFrame}>
							<div className={style.inputBox}>
								<input type="text" placeholder="請輸入內容..." className={style.input} />
								<input
									type="text"
									placeholder="請輸入金額..."
									className={style.input}
									value={calEle || result}
									readOnly
								/>
							</div>
							<div className={style.btnFrame}>
								<div className={style.calculaterFrame}>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle} onClick={() => clickBtn("1")}>1</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("2")}>2</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("3")}>3</div>
										<div className={style.calculaterOperator} onClick={() => clickBtn("+")}>+</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle} onClick={() => clickBtn("4")}>4</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("5")}>5</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("6")}>6</div>
										<div className={style.calculaterOperator} onClick={() => clickBtn("-")}>-</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle} onClick={() => clickBtn("7")}>7</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("8")}>8</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("9")}>9</div>
										<div className={style.calculaterOperator} onClick={() => clickBtn("*")}>*</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterOperator} onClick={() => clickBtn("x")}>x</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("0")}>0</div>
										<div className={style.calculaterOperator} onClick={() => clickBtn("=")}>=</div>
										<div className={style.calculaterOperator} onClick={() => clickBtn("/")}>/</div>
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