import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({})
    
    
    // Set data to localy 
        let userAuth = JSON.parse(localStorage.getItem('setAuth')) || []
        const { auth, userData } = userAuth
    // Set data to localy

    const LoginUser = (uData) => {
        setUser(uData)
        setIsAuth(true)
    }
    if(isAuth){
        let authantication = {
            userData: user,
            auth: true
        }
        localStorage.setItem("setAuth", JSON.stringify(authantication));
        setTimeout(function(){
            window.location.href = "/"
        },500)
    }
    
    
    const Logout = () => {
        setIsAuth(false)
        setUser({})
        localStorage.removeItem("setAuth")        
        window.location = "/login"
    }

    
    return (
        <AuthContext.Provider value={{isAuth: auth || false , user : userData, LoginUser, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}