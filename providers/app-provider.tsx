'use client';

import { createContext } from 'react';

interface AppContextInterface {}

const initialAppContext: AppContextInterface = {};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
