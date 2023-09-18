import { useState, createContext } from "react";

let AuthContext = createContext({
  isLoggedin: false,
  setIsLoggedIn: undefined,
});

export function AuthContextProvider(props) {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
