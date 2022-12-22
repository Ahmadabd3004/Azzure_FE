import styles from '../styles/LoginPage.module.css';
import Link from 'next/link'

const RegistrasiContainer = () => {
    return (
        <>
            <div className={styles.main}>
                <img src="/registrasi.png" alt="" className={styles.loginImg} />
                <img src="logoApp.png" alt="" className={styles.logoImg} />
                <div className={styles.loginContent}>
                    <div className={styles.card}>
                        <h1>Selamat Datang</h1>
                        <h2>Mulai perjalanan karirmu bersama JobHunt.id</h2>
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Password' />
                        <div className={styles.btnMasuk}>Daftar</div>
                        <h3 className={styles.persu}>Sudah punya akun?
                            <Link href="/login" style={{ textDecoration: "none" }}>
                                <span> Masuk Sekarang</span>
                            </Link>
                        </h3>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrasiContainer;