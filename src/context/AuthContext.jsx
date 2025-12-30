import { createContext, useContext, useState } from 'react';
import { sha256 } from '../utils/crypto';

const AuthContext = createContext(null);
const PASSWORD = 'demo123';

export function AuthProvider({ children }) {
    const [isAuthenticated, setAuth] = useState(
        localStorage.getItem('auth') === 'true'
    );

    const login = async (password) => {
        if ((await sha256(password)) === await sha256(PASSWORD)) {
            localStorage.setItem('auth', 'true');
            setAuth(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('auth');
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
