import React from 'react';
import styles from "./comment-form.module.less";
import {useTranslation} from "react-i18next";

const CommentForm = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.commentForm}>
            <div className={styles.contentBx}>
                <div className={styles.inputBx}>
                    <input type="text" name="" placeholder={t("commentForm.fullName")}/>
                </div>
                <div className={styles.inputBx}>
                    <input type="text" name="" placeholder={t("commentForm.emailAddress")}/>
                </div>
                <div className={styles.inputBx}>
                    <input type="text" name="" placeholder={t("commentForm.mobileNo")}/>
                </div>
                <div className={styles.inputBx}>
                    <textarea name="" placeholder={t("commentForm.textAreaPlaceholder")}></textarea>
                </div>
                <div className={styles.inputBx}>
                    <input type="submit" name="" value={t("commentForm.sendBtnText")}></input>
                </div>
            </div>
            <div className={styles.imgBx}></div>
        </section>
    );
};

export default CommentForm;