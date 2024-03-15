import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { User } from "../types/user";

interface IUserContext {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

const defaultValue = {
    user: {
        userId: "",
        username: "",
        color: ""
    },
    setUser: () => {}
}

const UserContext = createContext<IUserContext>(defaultValue);

const UserProvider = (props: PropsWithChildren) => {
    const [user, setUser] = useState<User>({ userId: "", username: "", color: "" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {
    UserProvider,
    UserContext
}
