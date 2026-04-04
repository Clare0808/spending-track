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
	const [lastResult, setLastResult] = useState(0);
	const [calEle, setCalEle] = useState("");
	const [lastOpe, setLastOpe] = useState("");
	const [selectedBtn, setSelectedBtn] = useState(null);
	const [selectedType, setSelectedType] = useState(null);
	const [selectedOpt, setSelectedOpt] = useState(null);

	const clickBtn = (item) => {
		if (item === "+") {
			setResult((prev) => {
				if (lastResult !== 0) {
					return prev;
				} else {
					return prev + parseInt(calEle);
				}
			})

			setCalEle("");
			setLastOpe("+");
		} else if (item === "-") {
			setResult((prev) => {
				if (lastResult !== 0) {
					return prev;
				} else {
					if (prev === 0) {
						return parseInt(calEle);
					} else {
						return prev - parseInt(calEle)
					}
				}
			});

			setCalEle("");
			setLastOpe("-");
		} else if (item === "*") {
			setResult((prev) => {
				if (lastResult !== 0) {
					return prev;
				} else {
					if (prev === 0) {
						return 1;
					} else {
						return prev * parseInt(calEle);
					}
				}
			});

			setCalEle("");
			setLastOpe("*");
		} else if (item === "/") {
			setResult((prev) => {
				if (lastResult !== 0) {
					return prev;
				} else {
					if (prev === 0) {
						return parseInt(calEle);
					} else {
						return prev / parseInt(calEle);
					}
				}
			});

			setCalEle("");
			setLastOpe("/");
		} else if (item === "=") {
			const num = parseInt(calEle || "0");
			let newResult = 0;

			if (lastOpe === "+") {
				newResult = result + num;
			} else if (lastOpe === "-") {
				newResult = result - num;
			} else if (lastOpe === "*") {
				newResult = result * num;
			} else if (lastOpe === "/") {
				newResult = result / num;
			} else {
				newResult = num;
			}

			setResult(newResult);
			setLastResult(newResult);

			setCalEle("");
			setSelectedBtn(null);
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
					<PayElement
						className={style.createSpendingOutframe}
						result={result}
					/>
					<div className={style.typeBox}>
						<div
							className={selectedType === "收入" ? style.activeType : style.type}
							onClick={() => setSelectedType("收入")}
						>收入</div>
						<div
							className={selectedType === "支出" ? style.activeType : style.type}
							onClick={() => setSelectedType("支出")}
						>支出</div>
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
										<div
											className={selectedBtn === "+" ? style.active : style.calculaterOperator}
											onClick={() => {
												clickBtn("+")
												setSelectedBtn("+")
											}}
										>+</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle} onClick={() => clickBtn("4")}>4</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("5")}>5</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("6")}>6</div>
										<div
											className={selectedBtn === "-" ? style.active : style.calculaterOperator}
											onClick={() => {
												clickBtn("-")
												setSelectedBtn("-")
											}}
										>-</div>
									</div>
									<div className={style.calculaterLine}>
										<div className={style.calculaterEle} onClick={() => clickBtn("7")}>7</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("8")}>8</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("9")}>9</div>
										<div
											className={selectedBtn === "*" ? style.active : style.calculaterOperator}
											onClick={() => {
												clickBtn("*")
												setSelectedBtn("*")
											}}
										>*</div>
									</div>
									<div className={style.calculaterLine}>
										<div
											className={style.calculaterOperator}onClick={() => clickBtn("x")}>x</div>
										<div className={style.calculaterEle} onClick={() => clickBtn("0")}>0</div>
										<div className={style.calculaterOperator} onClick={() => clickBtn("=")}>=</div>
										<div
											className={selectedBtn === "/" ? style.active : style.calculaterOperator}
											onClick={() => {
												clickBtn("/")
												setSelectedBtn("/")
											}}
										>/</div>
									</div>
								</div>
								<div className={style.optionsBox}>
									<div
										className={selectedOpt === "餐飲" ? style.activeOption : style.option}
										onClick={() => setSelectedOpt("餐飲")}
									>
										<SiMealie className={selectedOpt === "餐飲" ? style.activeOptionIcon : style.optionIcon} />
										餐飲
									</div>
									<div 
										className={selectedOpt === "交通" ? style.activeOption : style.option}
										onClick={() => setSelectedOpt("交通")}
									>
										<FaCarAlt className={selectedOpt === "交通" ? style.activeOptionIcon : style.optionIcon} />
										交通
									</div>
									<div 
										className={selectedOpt === "教育" ? style.activeOption : style.option}
										onClick={() => setSelectedOpt("教育")}
									>
										<IoSchool className={selectedOpt === "教育" ? style.activeOptionIcon : style.optionIcon} />
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