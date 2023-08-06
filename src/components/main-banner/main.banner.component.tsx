import React from 'react';
import styles from './main-banner.module.less';
import bannerImg from '@images/bg.jpg';
import {useTranslation} from "react-i18next";

const MainBanner = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.banner}>
            <header>
                <a href="#" className={styles.bannerLogo}>
                    {t("banner.logoName")}
                </a>
                <div className={styles.bannerToggle}></div>
            </header>
            <img src={bannerImg} alt="big-picture"/>
            <div className={styles.bannerContent}>
                <h2>{t("banner.content.title")}</h2>
                <p>{t("banner.content.description")}</p>
            </div>
        </div>
    );
};

export default MainBanner;