import React from "react";
import styles from "./Header.module.scss";

export interface HeaderDataType {}

interface HeaderProps {}

const Header:React.FC<HeaderProps> = (props) => {
    return (
        <div className={styles["root"]}>
            Header template
        </div>
    )
}

export default Header;