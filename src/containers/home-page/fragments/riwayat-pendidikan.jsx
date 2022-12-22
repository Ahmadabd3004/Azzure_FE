import styles from '../../../styles/HomePage.module.css';
import React, { useState } from 'react';
import { InputDate, Input, InputSelect } from '../../../components/input';
import UseHome from '../hooks/useHome';
const RiwayatPendidikan = () => {

    const [toggleRP, setToggleRP] = useState(false);
    const [toggleRpForm, setToggleRpForm] = useState(false)
    const [main, setMain] = useState("main")
    const { rpData, setRpData, jenjangData, rpTunggal, setRpTunggal, addRp } = UseHome();
    const changeJenjang = (jenjang) => {
        const newData = {
            ...rpTunggal,
        };
        newData["Pendidikan"] = jenjang;
        setRpTunggal(newData)
    }

    const changeData = (e) => {
        let { name, value } = e.target;
        const newData = {
            ...rpTunggal,
        };
        newData[name] = value;

        setRpTunggal(newData)
    }
    return (
        <>
            {!toggleRP && <div className={styles.section1}>
                <div className={styles.title}>
                    <h1>Riwayat Pendidikan</h1>
                    <img src="/plus.svg" alt="" onClick={() =>
                        setToggleRP(!toggleRP)} />
                </div>
                <hr />
            </div>}
            {toggleRP && <div className={styles.section1Active}>
                <div className={styles.title}>
                    <h1>Riwayat Pendidikan</h1>
                    <img src="/minus.svg" alt="" onClick={() => setToggleRP(!toggleRP)} />
                </div>
                <hr />
                <div className={styles.btnRP} onClick={() => {
                    setRpTunggal({
                        Pendidikan: "",
                        Kd_Pendidikan: "",
                        NamaSekolah: "",
                        TanggalMulai: "",
                        TanggalSelesai: ""
                    })
                    setToggleRpForm(!toggleRpForm)
                    setMain("main2")
                }}>
                    <img src="/plusBlue.svg" alt="" />
                    <h1>Tambah riwayat pendidikan</h1>
                </div>
                {rpData.length != 0 &&
                    rpData.map((e, idx) => {
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                        ];

                        return <div className={styles.rpp} key={idx}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <div>
                                    <h1>{e.NamaSekolah}</h1>
                                    <h2>{e.Pendidikan}</h2>
                                    <h3>{monthNames[new Date(e.TanggalMulai).getMonth()]} {new Date(e.TanggalMulai).getFullYear()} - {monthNames[new Date(e.TanggalSelesai).getMonth()]} {new Date(e.TanggalSelesai).getFullYear()}</h3>
                                </div>
                                <div>
                                    <img src="/edit.svg" alt="" />
                                </div>
                            </div>
                            <hr />
                        </div>
                    })


                }

            </div>
            }





            {toggleRpForm &&

                <div className={styles.rpForm}>
                    <div className={styles.rpFormCard} >
                        <div className={styles.rpFormTitle}>
                            <h1>Riwayat Pendidikan</h1>
                            <img src="/close.svg" alt="" onClick={() => {
                                setToggleRpForm(!toggleRpForm)
                                setMain("main")
                            }} />
                        </div>
                        <InputSelect label="Jenjang" selected={rpTunggal.Pendidikan} onChange={changeJenjang} placeholder="Pilih Jenjang" data={jenjangData} type="provinsiForm" />
                        <Input label="Nama Sekolah" style="inputSectionForm" name="NamaSekolah" onChange={(e) => changeData(e)} />
                        <InputDate label="Tanggal Mulai" style="inputSectionForm" name="TanggalMulai" onChange={(e) => changeData(e)} />
                        <InputDate label="Tanggal Selesai" style="inputSectionForm" name="TanggalSelesai" onChange={(e) => changeData(e)} />
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
                                addRp()
                                // setToggleSuccessAdd(!toggleSuccessAdd)
                                setToggleRpForm(!toggleRpForm)
                            }}>Simpan</div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default RiwayatPendidikan;