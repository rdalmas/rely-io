import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../providers/user.provider";
import { generateId } from "../helpers/generateId";

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
        <main>
            <h1>Welcome</h1>
            <section>
                <h2>Please set your username and prefered color</h2>
                <input value={user.username} data-testid="username-input" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUser(e, "username")} />
                <input value={user.color} data-testid="color-input" type="color" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUser(e, "color")} />
                <button data-testid="submit-button" disabled={!user.username && !user.color} onClick={navitateTaskPage}>Submit</button>
            </section>
        </main>
    )
};

export default Welcome;
