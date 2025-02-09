import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { IErrorResponse } from "./types/IerrorResponse.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: IErrorResponse) => {
        notifications.show({
          color: "red",
          autoClose: 5000,
          message: error.response?.data.message,
        });
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
