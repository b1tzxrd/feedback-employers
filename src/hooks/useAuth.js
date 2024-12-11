import { useSelector } from "react-redux"


export const useAuth = () => {
    
    const { userName, email, id, token, isAdmin } = useSelector(state => state.user)

    return {
        isAuth: !!email,
        userName,
        email,
        token,
        id,
        isAdmin
    }
}