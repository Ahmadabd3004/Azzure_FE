import styles from '../../../styles/HomePage.module.css';
import React, { useState } from 'react';
import { InputDate, Input, InputSelect } from '../../../components/input';
import UseHome from '../hooks/useHome';
const Sertifikasi = () => {
    let [toggleSertifikat, setToggleSertifikat] = useState(false);
    const { srTunggal, setSrTunggal, bidangData, addSr, srData } = UseHome();

    let [toggleSrForm, setToggleSrForm] = useState(false)

    const changeBidang = (idBidang, namaBidang) => {
        const newData = {
            ...srTunggal,
        };
        newData["Id_Bidang"] = idBidang;
        newData["NamaBidang"] = namaBidang;
        setSrTunggal(newData)
    }

    const changeData = (e) => {
        let { name, value } = e.target;
        const newData = {
            ...srTunggal,
        };
        newData[name] = value;

        setSrTunggal(newData)
    }
    return (
        <>
            {
                !toggleSertifikat && <div className={styles.section1}>
                    <div className={styles.title}>
                        <h1>Sertifikasi</h1>
                        <img src="/plus.svg" alt="" onClick={() =>
                            setToggleSertifikat(!toggleSertifikat)} />
                    </div>
                    <hr />
                </div>
            }
            {
                toggleSertifikat && <div className={styles.section1Active}>
                    <div className={styles.title}>
                        <h1>Sertifikasi</h1>
                        <img src="/minus.svg" alt="" onClick={() => setToggleSertifikat(!toggleSertifikat)} />
                    </div>
                    <hr />
                    <div className={styles.btnSR} onClick={() => {
                        setToggleSrForm(!toggleSrForm)
                    }}>
                        <img src="/plusBlue.svg" alt="" />
                        <h1>Tambah sertifikasi</h1>
                    </div>
                </div>
            }


            {
                toggleSertifikat && srData && srData.length != 0 &&
                srData.map((e, idx) => {
                    return <div className={styles.sp} key={idx}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%"
                        }}>
                            <div>
                                <h1>{e.NamaLembaga}</h1>
                                <h2>{e.NamaBidang}</h2>
                            </div>
                            <div>
                                <img src="/edit.svg" alt="" />
                            </div>
                        </div>
                        <hr />
                    </div>
                })



            }

            {toggleSrForm &&
                <div className={styles.srForm}>
                    <div className={styles.srFormCard} >
                        <div className={styles.srFormTitle}>
                            <h1>Sertifikasi</h1>
                            <img src="/close.svg" alt="" onClick={() => {
                                setToggleSrForm(!toggleSrForm)
                            }} />
                        </div>

                        <Input label="Nama Lembaga" style="inputSectionForm" name="NamaLembaga" onChange={(e) => changeData(e)} />
                        <InputSelect label="Bidang" placeholder="Pilih Bidang" selected={srTunggal.NamaBidang} onChange={changeBidang} type="provinsiForm" data={bidangData} />

                        <div style={{
                            position: "relative",
                            display: "flex",
                            marginTop: "50px"

                        }}>
                            <div className={styles.btnHapus} onClick={() => setToggleNotifDel(!toggleNotifDel)}>
                                <img src="/delete.svg" alt="" />
                                <h1>Hapus</h1>
                            </div>

                            <div className={styles.btnSimpan} onClick={() => {
                                addSr();
                                setSrTunggal({
                                    Pendidikan: "",
                                    Kd_Pendidikan: "",
                                    NamaSekolah: "",
                                    TanggalMulai: "",
                                    TanggalSelesai: ""
                                })
                                // setToggleSuccessAdd(!toggleSuccessAdd)
                                setToggleSrForm(!toggleSrForm)
                            }}>Simpan</div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Sertifikasi;