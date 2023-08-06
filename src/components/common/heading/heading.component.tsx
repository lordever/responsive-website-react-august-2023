import React, {FC, memo} from 'react';
import styles from "./heading.module.less";
import classNames from "classnames";

interface HeadingProps {
    text: string;
    className?: string;
}

const Heading: FC<HeadingProps> = ({text, className}) => {

    const headingClasses = classNames(className || styles.heading);

    return (
        <h2 className={headingClasses}>{text}</h2>
    );
};

export default memo(Heading);