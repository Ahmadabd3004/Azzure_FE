import styles from "../../styles/Input.module.css";

const InputDate = ({ label, onChange, style, name, value }) => {
    return <div className={styles[style]}>
        <label htmlFor="">{label}</label>
        <input type="date" onChange={onChange} name={name} value={value} />
    </div>
};
export default InputDate;