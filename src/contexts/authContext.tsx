import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../http";
import { IErrorResponse } from "../types/IerrorResponse";
interface AuthContextType {
  logout: () => void;
  accessToken: string | null;
  auth: AuthUserDto | undefined;
  isLoadingAuth: boolean;
  setAccessToken: (accessToken: string) => void;

  user: User | null;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    data: authData,
    isPending: isLoadingAuth,
    error: authError,
  } = useQuery({
    queryKey: ["auth"],
    queryFn: () => http.users.userControllerGetAuth(),
    enabled: !window.location.pathname.startsWith("/auth/"),
  });

  const [accessToken, setAccessToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") || null;
    }
    return null;
  });

  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  useEffect(() => {
    if (accessToken) {
      http.setSecurityData({ bearerAuth: accessToken });
    } else {
      http.setSecurityData(null);
    }
  }, [accessToken]);

  useEffect(() => {
    const err = authError as IErrorResponse;
    if (!err) return;

    if (err.response?.data.statusCode === 401) {
      logout();
      if (!window.location.pathname.startsWith("/auth/")) {
        window.location.href = "/auth/signin";
      }
    }
  }, [authError]);

  const setAccessTokenWithStorage = (token: string) => {
    localStorage.setItem("token", token);
    setAccessToken(token);
  };

  const setUserWithStorage = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData || null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAccessToken(null);

    window.location.href = "/auth/signin";
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        setAccessToken: setAccessTokenWithStorage,
        accessToken,
        auth: authData?.data,
        isLoadingAuth,
        user,
        setUser: setUserWithStorage,
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
