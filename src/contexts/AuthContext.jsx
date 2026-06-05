import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: "Alex M",
    email: "alex@dal.ca",
  });

  function signIn(email) {
    setUser({
      id: 1,
      name: "Alex M",
      email,
    });
  }

  function signUp(name, email, password) {
    setUser({
      id: 1,
      name,
      email,
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}