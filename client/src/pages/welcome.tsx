import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../providers/user.provider";
import { generateId } from "../helpers/generateId";

import "./welcome.css";

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
            <section className="flex column">
                <h2>Please set your username and prefered color</h2>
                <div className="flex container column">
                    <div className="flex row hor-start field-spacing">
                        <label className="label-width label-mrgn" htmlFor="username">username: </label>
                        <input value={user.username} data-testid="username-input" name="username" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUser(e, "username")} />                    
                    </div>
                    <div className="flex row hor-start field-spacing">
                        <label className="label-width label-mrgn" htmlFor="color">color: </label>
                        <input value={user.color} data-testid="color-input" type="color" name="color" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUser(e, "color")} />
                    </div>
                    <div className="flex row hor-center field-spacing">
                        <button data-testid="submit-button" disabled={!user.username && !user.color} onClick={navitateTaskPage}>Submit</button>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Welcome;
