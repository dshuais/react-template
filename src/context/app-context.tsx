/*
 * @Author: dushuai
 * @Date: 2025-03-12 17:07:52
 * @LastEditors: dushuai
 * @LastEditTime: 2025-03-17 13:56:29
 * @description: AppContextProvider
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createContext, useContext } from 'use-context-selector';

const AppContext = createContext({
});

export function AppContextProvider({ children }: Common.Children) {

  const pathname = useLocation().pathname;

  useEffect(() => {
    console.log('AppContextProvider pathname:>> ', pathname);
  }, [pathname]);

  return (
    <AppContext.Provider
      value={{}}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);

export default AppContext;
