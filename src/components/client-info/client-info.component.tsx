import React from 'react';
import styles from './client-info.module.less';
import Heading from "../common/heading/heading.component";
import Text from "../common/text/text.component";
import {useTranslation} from "react-i18next";
import brand1Icon from "@images/brand1.png";
import brand2Icon from "@images/brand2.png";
import brand3Icon from "@images/brand3.png";
import brand4Icon from "@images/brand4.png";

const ClientInfo = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.client}>
            <Heading text={t("clientInfo.title")}/>
            <Text text={t("clientInfo.description")}/>
            <div className={styles.imgBx}>
                <img src={brand1Icon} alt="brand"/>
                <img src={brand2Icon} alt="brand"/>
                <img src={brand3Icon} alt="brand"/>
                <img src={brand4Icon} alt="brand"/>
            </div>
        </section>
    );
};

export default ClientInfo;