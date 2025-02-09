"use client";

import { createContext, useContext, useState } from "react";

interface AuthContextType {
  logout: () => void;
  
  setAccessToken: (accessToken: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") || null;
    }
    return null;
  });
  const setAccessTokenWithStorage = (token: string) => {
    localStorage.setItem("token", token);
    setAccessToken(token);
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("business");
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        setAccessToken: setAccessTokenWithStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
