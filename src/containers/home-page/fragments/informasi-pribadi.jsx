import React, { useState } from 'react';
import { InputDate, Input, InputSelect } from '../../../components/input';
import styles from '../../../styles/HomePage.module.css';

import UseHome from '../hooks/useHome';

const InformasiPribadi = () => {

    const { data, setData, provinsiData, kabupatenData } = UseHome();

    let [toggleInformasi, setToggleInformasi] = useState(false);
    // let [toggleProv, setToggleProv] = useState(false);
    // let [toggleKab, setToggleKab] = useState(false);
    let [provinsi, setProvinsi] = useState("")
    let [kabupaten, setKabupaten] = useState("")


    const ageGenerate = e => {
        const date = new Date(e.target.value)
        const birth = date.getFullYear();
        const year = new Date().getFullYear();

        const ageEmployee = year - birth;
        const newData = {
            ...data,
        };
        newData["TanggalLahir"] = e.target.value;
        newData["Umur"] = ageEmployee;
        setData(newData);
    }

    const changeData = (e) => {
        let { name, value } = e.target;
        const newData = {
            ...data,
        };
        newData[name] = value;
        setData(newData);
    }

    const changeProv = (idProv, namaProv) => {
        const newData = {
            ...data,
        };
        newData["Kd_Provinsi"] = idProv;
        setData(newData);
        setProvinsi(namaProv)
    }
    const changeKab = (idKab, namaKab) => {
        const newData = {
            ...data,
        };
        newData["Kd_Kota"] = idKab;
        setData(newData);
        setKabupaten(namaKab)
    }
    return (
        <>
            {!toggleInformasi && <div className={styles.section1}>
                <div className={styles.title}>
                    <h1>Informasi Pribadi</h1>
                    <img src="/plus.svg" alt="" onClick={() =>
                        setToggleInformasi(!toggleInformasi)} />
                </div>
                <hr />
            </div>}
            {toggleInformasi && <div className={styles.section1Active}>
                <div className={styles.title}>
                    <h1>Informasi Pribadi</h1>
                    <img src="/minus.svg" alt="" onClick={() => setToggleInformasi(!toggleInformasi)} />
                </div>
                <hr />
                <Input label="Nama Lengkap" style="inputSection" name="NamaLengkap" onChange={(e) => changeData(e)} value={data.NamaLengkap} />
                <InputDate label="Tanggal Lahir" onChange={(e) => ageGenerate(e)} style="inputSection" name="TanggalLahir" value={data.TanggalLahir} />
                <Input label="Umur" style="inputSection" name="Umur" onChange={(e) => changeData(e)} isDisabled value={data.Umur} />
                <Input label="Alamat Lengkap" style="inputSection" name="AlamatLengkap" onChange={(e) => changeData(e)} value={data.AlamatLengkap} />

                <InputSelect label="Provinsi" selected={provinsi} onChange={changeProv} placeholder="Pilih Provinsi" name="Kd_Provinsi" type="provinsi" data={provinsiData} />
                <InputSelect label="Kota / Kabupaten" selected={kabupaten} onChange={changeKab} placeholder="Pilih Kota / Kabupaten" name="Kd_Kota" data={kabupatenData} type="provinsi" />

            </div>}
        </>
    )
}

export default InformasiPribadi;