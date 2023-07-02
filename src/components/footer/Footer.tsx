import React from "react";
import styles from "./Footer.module.scss";

export interface FooterDataType {}

interface FooterProps {}

const Footer:React.FC<FooterProps> = (props) => {
    return (
        <div className={styles["root"]}>
            Footer template
        </div>
    )
}

export default Footer;