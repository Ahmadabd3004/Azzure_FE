import Styles from "../../styles/button.module.css";

const Button = ({ label, type, icon }) => {
    return <button className={Styles[type]}>{icon && <img src={icon} style={{ width: "20px", marginRight: "13px" }} />} {label}</button>
};
export default Button;