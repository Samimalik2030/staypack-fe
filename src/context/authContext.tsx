"use client";

import { createContext, useContext, useEffect, useState } from "react";


import { useQuery } from "@tanstack/react-query";
interface AuthContextType {
  logout: () => void;
  accessToken: string | null;
 
//   isLoadingAuth: boolean;
 
  
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

//   const [business, setBusiness] = useState<Business | null>(() => {
//     if (typeof window !== "undefined") {
//       const savedBusiness = localStorage.getItem("business");
//       return savedBusiness ? JSON.parse(savedBusiness) : null;
//     }
//     return null;
//   });

//   useEffect(() => {
//     if (accessToken) {
//       http.setSecurityData({ bearerAuth: accessToken });
//     } else {
//       http.setSecurityData(null);
//     }
//   }, [accessToken]);

//   useEffect(() => {
//     const err = authError as IErrorResponse;
//     if (!err) return;

//     if (err.response?.data.statusCode === 401) {
//       logout();
//       if (!window.location.pathname.startsWith("/auth/")) {
//         window.location.href = "/auth/signin";
//       }
//     }
//   }, [authError]);

  const setAccessTokenWithStorage = (token: string) => {
    localStorage.setItem("token", token);
    setAccessToken(token);
  };

//   const setBusinessWithStorage = (businessData: Business) => {
//     localStorage.setItem("business", JSON.stringify(businessData));
//     setBusiness(businessData);
//   };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("business");
    setAccessToken(null);

    // setBusiness(null);
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
       
        setAccessToken: setAccessTokenWithStorage,
        accessToken,
        
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
