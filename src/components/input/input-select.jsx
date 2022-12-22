import styles from "../../styles/Input.module.css";
import React, { useState } from 'react';
const InputSelect = ({ label, selected, onChange, placeholder, name, type, data }) => {
    const [toggle, setToggle] = useState(false)
    const [area, setArea] = useState("")
    return <div className={styles.inputSection} onClick={() => setToggle(!toggle)}>
        <label htmlFor="">{label}</label>
        <div style={{
            display: "flex",
            position: "relative"
        }}>
            <input type="text" disabled placeholder={placeholder} value={selected} name={name} />
            <img src="/Down.svg" alt="" className={styles.dropdown} />

        </div>
        {toggle && <div className={styles[type]}>
            {data && data.length != 0 && data.map((e, idx) => {
                if (label == "Provinsi") {
                    return <div className={styles.item} onClick={() => onChange(e.Kd_Provinsi, e.NamaProvinsi)} key={idx}>{e.NamaProvinsi}</div>
                } else if (label == "Jenjang") {
                    return <div className={styles.itemForm} onClick={() => onChange(e.Pendidikan)} key={idx}>{e.Pendidikan}</div>
                } else if (label == "Bidang") {
                    return <div className={styles.itemForm} onClick={() => onChange(e.Id_Bidang, e.NamaBidang)} key={idx}>{e.NamaBidang}</div>
                } else {
                    return <div className={styles.item} onClick={() => onChange(e.Kd_Kota, e.NamaKota)} key={idx}>{e.NamaKota}</div>
                }
            })}

        </div>}
    </div>
};
export default InputSelect;