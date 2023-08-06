import React from 'react';
import styles from './about.module.less';
import Heading from "../common/heading/heading.component";
import {useTranslation} from "react-i18next";
import Text from "../common/text/text.component";

const About = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.about}>
            <div className={styles.contentBx}>
                <Heading text={t("about.heading")}/>
                <Text text={t("about.text")}/>
            </div>
            <div className={styles.imgBx}></div>
        </section>
    );
};

export default About;