import { useState, createContext } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase-config";

let AuthContext = createContext({
  email: null,
  password: null,
  isLoggedin: false,
  setEmail: undefined,
  setPassword: undefined
});

export function AuthContextProvider(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [isLoggedin, setIsLoggedIn] = useState(false);

  const redirectAdmin = isLoggedin => {
    if (isLoggedin) {
      window.location.href = "/admin";
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn = true;
      redirectAdmin(isLoggedin);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        password,
        isLoggedin,
        redirectAdmin,
        login,
        logout,
        setEmail,
        setPassword
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
