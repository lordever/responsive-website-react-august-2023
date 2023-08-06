import React from 'react';
import {useTranslation} from "react-i18next";
import styles from "./contact-us.module.less";
import Heading from "../common/heading/heading.component";
import Text from "../common/text/text.component";

const ContactUs = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.contact}>
            <Heading text={t("contactUs.title")}/>
            <Text text={t("contactUs.description")}/>
        </section>
    );
};

export default ContactUs;