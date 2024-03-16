import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../providers/user.provider";
import { generateId } from "../helpers/generateId";

import styles from "./welcome.module.scss";
import taskTrackerSvg from "../assets/task-tracker.svg";

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

    const navitateTaskPage = () => {
        navigate("/task");
    }

    return (
        <main className={styles.main}>
            <article className={styles.welcomeContainer}>
                <div className={styles.titleContainer}>
                    <img src={taskTrackerSvg} className={styles.imgTitle} />
                    <h1>Task Tracker</h1>
                </div>
                <section>
                    <label htmlFor="username"><h3>Please enter your username:</h3>
                        <input value={user.username} data-testid="username-input" name="username" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUser(e, "username")} />
                    </label>
                    <div className={styles.buttonContainer}>
                        <button data-testid="submit-button" disabled={!user.username} onClick={navitateTaskPage}>Submit</button>
                    </div>
                </section>
            </article>
        </main>
    )
};

export default Welcome;
