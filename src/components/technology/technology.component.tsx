import React from 'react';
import techIcon from "@images/tech.png";
import styles from "./technology.module.less";
import Heading from "../common/heading/heading.component";
import Text from "../common/text/text.component";
import {useTranslation} from "react-i18next";

const Technology = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.technology}>
            <div className={styles.contentBx}>
                <Heading text={t("technology.heading")}/>
                <Text text={t("technology.description")}/>
            </div>
            <div className={styles.imgBx}>
                <img src={techIcon} alt="tech"/>
            </div>
        </section>
    );
};

export default Technology;