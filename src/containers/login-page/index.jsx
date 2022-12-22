import styles from '../../styles/LoginPage.module.css';
import Link from 'next/link'
import useLogin from './hooks/useLogin';

const LoginContainer = () => {
    const { loginData, setLoginData, changeLoginInput, loginHandler } = useLogin();
    return (
        <>
            <div className={styles.main}>
                <img src="/login.png" alt="" className={styles.loginImg} />
                <img src="logoApp.png" alt="" className={styles.logoImg} />
                <div className={styles.loginContent}>
                    <form >
                        <div className={styles.card}>
                            <h1>Halo!</h1>
                            <h2>Silahkan masukkan data di bawah ini</h2>
                            <input type="text" placeholder='Email' name="Email" onChange={(e) => changeLoginInput(e)} />
                            <input type="password" placeholder='Password' name="Password" onChange={(e) => changeLoginInput(e)} />
                            <div className={styles.btnMasuk} onClick={loginHandler}>Masuk</div>
                            <h3 className={styles.persu}>Belum punya akun?
                                <Link href="/registrasi" style={{ textDecoration: "none" }}>
                                    <span> Daftar Sekarang</span>
                                </Link>
                            </h3>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginContainer;