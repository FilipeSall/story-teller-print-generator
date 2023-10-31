import { ReactNode, createContext, useContext, useState } from "react";

/* eslint react-refresh/only-export-components: off */
/* eslint @typescript-eslint/no-explicit-any: off */

interface GlobalContext {
    theme:string,
    setTheme:(theme:string) => void,
}

const GlobalContext = createContext<any>(null);

export const useGlobalContext = () => {
    return useContext(GlobalContext);
  };

export const GlobalProvider: React.FC<{children : ReactNode}>= ({children}) => {

    const [theme, setTheme] = useState('hot');

    return (
        <GlobalContext.Provider value={{theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    );
}

