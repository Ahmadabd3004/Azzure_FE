import styles from '../styles/LandingPage.module.css';
import { Button } from '../components/button';
import Link from 'next/link'

const LandingContainer = () => {

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img src="/logoApp.png" alt="" />
        </div>
        <Link href="/login" style={{ textDecoration: "none" }}>
          <Button label="Masuk" type="btnPrimary" />
        </Link>

      </div>
      <div className={styles.content}>
        <div className={styles.content2}>
          <h1>Temukan Masa Depan
            Karirmu Sekarang</h1>
          <h2>Kami membantu menghubungkan para job seeker dengan
            perusahaan-perusahaan terbaik di Indonesia</h2>
          <div className={styles.btnContent}>
            <div style={{ marginRight: "30px" }} >
              <Button label="Selengkapnya" type="btnDetail" />
            </div>
            <div >
              <Button label="Hubungi Kami" type="btnPrimary" icon="/call.svg" />
            </div>
          </div>
        </div>
        <img src="/img.png" alt="" style={{
          marginTop: "20px"
        }} />
      </div>

      <div className={styles.premium}>
        <div className={styles.logoPremium}>
          <img src="/diamong.png" alt="" className={styles.diamondImg} />
          <img src="/ellipse.png" alt="" style={{ zIndex: "1" }} />
          <img src="/rectangle.png" alt="" style={{ marginLeft: "16px", marginTop: "11px" }} />
          <div className={styles.premiumText}>
            <h1>Get Premium</h1>
            <h2>For easy apllication</h2>
          </div>
        </div>


      </div>
    </main >
  )
}

export default LandingContainer;