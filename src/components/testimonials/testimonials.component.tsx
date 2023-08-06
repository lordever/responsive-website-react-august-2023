import React from 'react';
import styles from './testimonials.module.less';
import {useTranslation} from "react-i18next";
import Heading from "../common/heading/heading.component";

const Testimonials = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.testimonials}>
            <Heading text={t("testimonials.title")}/>
            <div className={styles.container}>
                <div className={styles.contentBx}>
                    <div>
                        <p>{t("testimonials.comment")}</p>
                        <br/>
                        <h3>{t("testimonials.commentOwner")}</h3>
                    </div>
                </div>
                <div className={styles.contentBx}>
                    <div>
                        <p>{t("testimonials.comment")}</p>
                        <br/>
                        <h3>{t("testimonials.commentOwner")}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;