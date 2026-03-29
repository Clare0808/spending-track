import style from "./LoginPage.module.css"

import google from "../assets/google.png"

function LoginPage () {
	return (
		<>
			<div className={style.page}>
				<div className={style.frame}>
					<div className={style.funcBox}>
						<div className={style.title}>登入</div>
						<div className={style.inputFrame}>
							<div className={style.secTitle}>E-mail</div>
							<input type="text" className={style.input} />
						</div>
						<div className={style.inputFrame}>
							<div className={style.secTitle}>密碼</div>
							<input type="password" className={style.input} />
						</div>
						<div className={style.btnFrame}>
							<div className={style.localBtnFrame}>
								<div className={style.signUpBtn}>註冊</div>
								<div className={style.loginBtn}>登入</div>
							</div>
							<div className={style.text}>or</div>
							<div className={style.googleBtn}>
								以 <img src={google} className={style.googleImg} />
								<span className={style.google}>Google</span>
								帳號登入
							</div>
						</div>
					</div>
					<div className={style.funcBox}>
						<div className={style.title}>註冊</div>
						<div className={style.inputFrame}>
							<div className={style.secTitle}>E-mail</div>
							<input type="text" className={style.input} />
						</div>
						<div className={style.inputFrameMix}>
							<div className={style.inputFrame}>
								<div className={style.secTitle}>名稱</div>
								<input type="text" className={style.input} />
							</div>
							<div className={style.inputFrame}>
								<div className={style.secTitle}>電話號碼</div>
								<input type="text" className={style.input} />
							</div>
						</div>
						<div className={style.inputFrame}>
							<div className={style.secTitle}>密碼</div>
							<input type="password" className={style.input} />
						</div>
						<div className={style.inputFrame}>
							<div className={style.secTitle}>確認密碼</div>
							<input type="password" className={style.input} />
						</div>
						<div className={style.btnFrame}>
							<div className={style.localBtnFrame}>
								<div className={style.signUpBtn}>登入</div>
								<div className={style.loginBtn}>註冊</div>
							</div>
							<div className={style.text}>or</div>
							<div className={style.googleBtn}>
								以 <img src={google} className={style.googleImg} />
								<span className={style.google}>Google</span>
								帳號登入
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginPage