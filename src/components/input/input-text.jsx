import styles from "../../styles/Input.module.css";

const Input = ({ label, style, name, onChange, isDisabled, value }) => {
    return <div className={styles[style]}>
        <label htmlFor="">{label}</label>
        <input type="text" name={name} value={value} onChange={onChange} disabled={isDisabled} />
    </div>
};
export default Input;