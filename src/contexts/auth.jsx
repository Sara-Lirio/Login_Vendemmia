import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (userLogin, password) => {
    console.log({ userLogin, password });
    if (userLogin === 'vendemmia' && password === '123123123') {
      setUser({ userLogin, password });
      navigate('/home');
    } else {
      console.log('Senha e/ou usuário inválido(s)');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
