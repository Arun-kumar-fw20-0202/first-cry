import { useConst } from '@chakra-ui/react'
import { AuthContext } from '../authcontext/AuthContext'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

function PrivateRoute({ children }) {
    const { isAuth } = useContext(AuthContext)
    
    console.log(isAuth)
    if(!isAuth){
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute