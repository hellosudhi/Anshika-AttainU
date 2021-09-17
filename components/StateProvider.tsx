// @ts-check
import { createContext, useCallback, useEffect, useState } from "react"


// export interface StateValue {
//     username: string;
// }

export const ContextValue = () => {
    const [username, setusername] = useState<string | null>(localStorage.getItem("username"))
    return {
        username,
        setusername
    }
}
export const Context = createContext<any>(ContextValue)

export const StateProvider: React.FC = ({ children }) => {
    return (
        <Context.Provider value={ContextValue} >
            {children}
        </Context.Provider>);
}

