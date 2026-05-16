import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();


// Provider
export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] = useState(null);


  // Load from localStorage
  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  // Login
  const login = (data) => {
    setUser(data);

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );
  };


  // Logout
  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};
