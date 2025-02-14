import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  components: {
    Button: {
      defaultProps: {
        size: "md",
        radius: "md",
        border: "1px solid #2A8C82",
        backgroundColor: "#2A8C82",
        color: "#2A8C82",
      },
    },
    TextInput: {
      defaultProps: {
        size: "md",
        radius: "lg",
        border: "1px solid #2A8C82",
        backgroundColor: "#2A8C82",
        color: "#2A8C82",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "md",
        radius: "lg",
        border: "1px solid #2A8C82",
        backgroundColor: "#2A8C82",
        color: "#2A8C82",
      },
    },
    Input: {
      defaultProps: {
        size: "md",
        radius: "lg",
        border: "1px solid #2A8C82",
        backgroundColor: "#2A8C82",
        color: "#2A8C82",
      },
    },
    Select: {
      defaultProps: {
        size: "md",
        radius: "lg",
        border: "1px solid #2A8C82",
        backgroundColor: "#2A8C82",
        color: "#2A8C82",
      },
    },
    MultiSelect: {
      defaultProps: {
        size: "md",
        radius: "lg",
        border: "1px solid #2A8C82",
        backgroundColor: "#2A8C82",
        color: "#2A8C82",
      },
    },
    Checkbox: {
      defaultProps: {
        size: "md",
        radius: "lg",
        border: "1px solid #2A8C82",
        backgroundColor: "#2A8C82",
        color: "#2A8C82",
      },
    },
    Container: {
      defaultProps: {
        padding: "0px",
      },
    },
    Card: {
      defaultProps: {
        padding: "12px",
        backgroundColor: "transparent",
      },
    },
    Image: {
      defaultProps: {
        objectFit: "cover",
        backgroundColor: "transparent",
      },
    },
    Flex: {
      defaultProps: {
        align: "center",
        gap: "md",
        padding: "md",
      },
    },
    Stack: {
      defaultProps: {
        gap: "md",
      },
    },
  },
});
