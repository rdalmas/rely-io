import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { User } from "../types/user";

interface IUserContext {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

const defaultValue = {
    user: {
        userId: "",
        username: ""
    },
    setUser: () => {}
}

const UserContext = createContext<IUserContext>(defaultValue);

const UserProvider = (props: PropsWithChildren) => {
    const [user, setUser] = useState<User>({ userId: "", username: "" });

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
