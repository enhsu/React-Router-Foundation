import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../auth";

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth();
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }
    
    return (
        <div>
            <label>
                User Name:{' '}
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    );
}
 
export default Login;