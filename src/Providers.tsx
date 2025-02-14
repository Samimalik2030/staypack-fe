import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import { router } from "./router";
import { AuthProvider } from "./contexts/authContext";
import { theme } from "./theme";

const Providers = () => {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" withinPortal zIndex={9999} />
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </MantineProvider>
  );
};

export default Providers;
