import style from "./sample.module.less";

const Hello = () => (
    <>
        <h1 className={style.header}>Hello from React with Typescript!</h1>
        <h1 className={style.header__text}>Hello from React with Typescript!</h1>
    </>
);

export default Hello;