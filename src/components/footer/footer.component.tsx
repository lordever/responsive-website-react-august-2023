import React from 'react';
import {useTranslation} from "react-i18next";
import Text from "../common/text/text.component";
import facebook from '@images/facebook.png';
import twitter from '@images/twitter.png';
import linkedin from '@images/linkedin.png';
import styles from "./footer.module.less";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.footer}>
            <Text text={t("footer.developedBy")}/>
            <ul>
                <Text text={t("footer.followUs")}/>
                <li><a href="#"><img src={facebook} alt="facebook"/></a></li>
                <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
            </ul>
        </section>
    );
};

export default Footer;