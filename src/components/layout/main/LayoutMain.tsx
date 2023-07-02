import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import React from "react";

import styles from "./LayoutMain.module.scss";

export interface LayoutMainDataType {}

interface LayoutMainProps {
    children: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = (props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default LayoutMain;
