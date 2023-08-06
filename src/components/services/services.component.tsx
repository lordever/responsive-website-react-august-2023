import React from 'react';
import styles from './services.module.less';
import Heading from "../common/heading/heading.component";
import {useTranslation} from "react-i18next";
import Text from "../common/text/text.component";
import leftIcon from '@images/icon1.png';
import middleIcon from '@images/icon2.png';
import rightIcon from '@images/icon3.png';

const Services = () => {

    const {t} = useTranslation();

    return (
        <section className={styles.services}>
            <Heading text={t("services.heading")}/>
            <Text text={t("services.text")}/>
            <div className={styles.container}>
                <div className={styles.serviceBx}>
                    <div>
                        <img src={leftIcon} alt="icon"/>
                        <h2>{t("services.boxes.left")}</h2>
                    </div>
                </div>
                <div className={styles.serviceBx}>
                    <div>
                        <img src={middleIcon} alt="icon"/>
                        <h2>{t("services.boxes.middle")}</h2>
                    </div>
                </div>
                <div className={styles.serviceBx}>
                    <div>
                        <img src={rightIcon} alt="icon"/>
                        <h2>{t("services.boxes.right")}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;