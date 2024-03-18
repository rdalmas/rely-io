import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../providers/user.provider";
import { generateId } from "../helpers/generateId";

import styles from "./welcome.module.scss";
import taskTrackerSvg from "../assets/task-tracker.svg";
import loginSvg from "../assets/login.svg";

const Welcome = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setUser((prevUser) => {
            return { 
                ...prevUser, [field]: e.target.value, userId: generateId() }
            }
        );
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          navitateTaskPage();
        }
      };

    const navitateTaskPage = () => {
        navigate("/task");
    }

    return (
        <main className={styles.main}>
            <article className={styles.welcomeContainer}>
                <div className={styles.titleContainer}>
                    <img alt="task tracker logo" height={50} width={50} src={taskTrackerSvg} className={styles.imgTitle} />
                    <h1>Task Tracker</h1>
                </div>
                <section>
                    <label htmlFor="username"><h2>Please enter your username:</h2>
                        <input tabIndex={0} value={user.username} data-testid="username-input" autoComplete="on" id="username" type="text" onKeyDown={handleKeyDown} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUser(e, "username")} />
                    </label>
                    <div className={styles.buttonContainer}>
                        <button data-testid="submit-button" disabled={!user.username} onClick={navitateTaskPage} onKeyDown={handleKeyDown}>
                            <img alt="remove task" src={loginSvg} height={20} width={20} />
                        </button>
                    </div>
                </section>
            </article>
        </main>
    )
};

export default Welcome;
