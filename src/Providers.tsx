import { Notifications } from "@mantine/notifications";
import { createTheme, MantineProvider } from "@mantine/core";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import { router } from "./router";
import { AuthProvider } from "./context/authContext";

const theme = createTheme({
  primaryColor: "blue",
  fontFamily: "Inter, sans-serif",
  components: {
    Button: {
      defaultProps: {
        size: "sm",
        radius: "md",
      },
    },
    TextInput: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    Input: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    Select: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    MultiSelect: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    Checkbox: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
  },
});

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
