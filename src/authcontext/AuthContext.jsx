import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({})

    const LoginUser = (uData) => {
        console.log(uData)
        setIsAuth(true)
        localStorage.setItem('remember', JSON.stringify(uData));
        localStorage.setItem('authantication', JSON.stringify(isAuth));
    }
    const Logout = () => {
        SetIsAuth(false)
        localStorage.removeItem("authantication")        
        localStorage.removeItem("remember")        
    }
    
    console.log(isAuth)
    return (
        <AuthContext.Provider value={{isAuth, user, LoginUser, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}