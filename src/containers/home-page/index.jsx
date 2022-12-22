import styles from '../../styles/HomePage.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'

import InformasiPribadi from './fragments/informasi-pribadi';
import RiwayatPendidikan from './fragments/riwayat-pendidikan';
import Sertifikasi from './fragments/sertifikasi';
import UseHome from './hooks/useHome';
const HomePage = () => {

    const { dataPegawai, setDataPegawai, addPegawai, data, isForm, setIsForm, addDaftarPegawai } = UseHome();
    let [main, setMain] = useState("main")

    let [toggleNotifDel, setToggleNotifDel] = useState(false)
    let [toggleNotifKirim, setToggleNotifKirim] = useState(false)
    let [toggleSuccesDel, setToggleSuccesDel] = useState(false)
    let [toggleSuccessAdd, setToggleSuccessAdd] = useState(false)



    return (
        <>

            <div className={styles[main]}>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <img src="/logoApp.png" alt="" />
                    </div>
                    <h1>Data Pegawai</h1>
                    <Link href="/" className={styles.btnKeluar}>
                        Keluar
                    </Link>

                </div>
                {isForm &&
                    <div className={styles.content}>
                        <form>
                            <InformasiPribadi />
                            <RiwayatPendidikan />
                            <Sertifikasi />
                            <div style={{ position: "relative", height: "150px" }}>
                                <div className={styles.btnSimpanDataPegawai} onClick={() => { addPegawai(); setIsForm(!isForm) }}>Simpan</div>
                            </div>
                        </form>
                    </div>
                }

                {!isForm &&
                    < div className={styles.content}>
                        <div className={styles.section2}>
                            {dataPegawai.map((e, idx) => {
                                return <div style={{ marginBottom: "40px" }} key={idx}>
                                    <div className={styles.title}>
                                        <h1>{e.data.NamaLengkap}</h1>
                                        <div>
                                            <img src="/delete.svg" alt="" style={{
                                                marginRight: "10px"
                                            }} />
                                            <img src="/edit.svg" alt="" style={{
                                                marginRight: "10px"
                                            }} />
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            })}



                            <div className={styles.persuAdd} onClick={() => { setIsForm(!isForm) }}>
                                <div style={{
                                    display: "flex"
                                }}>
                                    <div className={styles.persuBox}>
                                        <img src="/plusBlue.svg" alt="" />
                                    </div>
                                    <h1>Tambah Pegawai</h1>
                                </div>
                                <h2>Tambah jika anda ingin mendaftarkan lebih dari satu pegawai</h2>
                            </div>

                            <div className={styles.btnKirim} onClick={() => {
                                setToggleNotifKirim(!toggleNotifKirim)
                                // setMain("main2")
                            }}>Kirim</div>
                        </div>
                    </div>
                }
            </div>

            {/* Notif delete */}
            {
                toggleNotifDel && <div className={styles.notifDel}>
                    <div className={styles.notifDelCard}>
                        <h1>Anda yakin ingin menghapus data ini?</h1>
                        <h2>Data yang di hapus akan hilang dan tidak dapat di akses kembali</h2>
                        <div style={{ display: "flex" }}>
                            <div className={styles.btnCancel} onClick={() => setToggleNotifDel(!toggleNotifDel)}>Batal</div>
                            <div className={styles.btnHapusData} onClick={() => {
                                setToggleSuccesDel(!toggleSuccesDel)
                                setToggleNotifDel(!toggleNotifDel)
                                setToggleRpForm(!toggleRpForm)
                            }}>Hapus Data</div>
                        </div>
                    </div>
                </div>
            }

            {/* Notif sukses delete */}
            {
                toggleSuccesDel &&
                <div className={styles.successDel} onClick={() => {
                    setToggleSuccesDel(!toggleSuccesDel)
                    setMain("main")
                }}>
                    <div className={styles.notifSuccesDelCard}>
                        <div className={styles.circle}>
                            <img src="/deleteBig.svg" alt="" />
                        </div>
                        <h1>Data berhasil di hapus</h1>
                    </div>
                </div>
            }

            {/* Notif sukses kirim */}

            {
                toggleSuccessAdd && <div className={styles.successDel} onClick={() => {
                    setToggleSuccessAdd(!toggleSuccessAdd)
                    setMain("main")
                }}>
                    <div className={styles.notifSuccesDelCard}>
                        <div className={styles.circle}>
                            <img src="/success.svg" alt="" />
                        </div>
                        <h1 style={{ marginTop: "54px" }}>Selamat!</h1>
                        <h1>Data berhasil di simpan</h1>
                    </div>
                </div>
            }

            {/* Notif kirim data */}

            {
                toggleNotifKirim && <div className={styles.notifKirim}>
                    <div className={styles.notifKirimCard}>
                        <div className={styles.circleKirim}>
                            <img src="/paper.svg" alt="" />
                        </div>
                        <h1>Kirim Data</h1>
                        <h3>Sebelum anda mengirim, pastikan data yang telah anda isi benar dan dapat dipertanggungjawabkan. Anda tidak dapat mengubah ataupun mengedit data yang telah terkirim</h3>
                        <div style={{
                            position: "absolute",
                            top: "90px"
                        }}>
                            <div style={{ display: "flex", position: "relative", width: "350px" }}>
                                <div className={styles.btnCancelKirim} onClick={() => setToggleNotifKirim(!toggleNotifKirim)}>Batal</div>
                                <div className={styles.btnHapusDataKirim} onClick={() => {
                                    addDaftarPegawai()
                                    setToggleNotifKirim(!toggleNotifKirim)
                                }}>Kirim</div>
                            </div>
                        </div>
                    </div>
                </div>
            }



        </>
    )
}

export default HomePage;