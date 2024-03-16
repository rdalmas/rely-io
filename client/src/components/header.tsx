import taskTrackerSvg from "../assets/task-tracker.svg";

import style from "./header.module.scss";

type HeaderProps = {
    username?: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header className={style.headerContainer}>
            <section className={style.headerSection}>
                <img className={style.headerImg} src={taskTrackerSvg} />
                <span>Welcome, {props.username}</span>
            </section>
        </header>
    );
};

export default Header;
