import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.8rem",
          lineHeight: 1.6,
          color: "#ffffff",
          marginBottom: "0.2rem",
          fontFamily: "fantasy",
        },
      },
      variants: [
        {
          props: { variant: "body1" },
          style: {
            fontSize: "1.2rem",
            fontWeight: 300,
            color: "#ffffff",
            marginBottom: "0.5rem",
            fontFamily: "serif",
          },
        },
        {
          props: { variant: "h1" },
          style: {
            fontSize: "1.0rem",
            fontWeight: 200,
            color: "#ffffff",
            marginBottom: "0.5rem",
            fontFamily: "fantasy",
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "1.0rem",
            fontWeight: 200,
            color: "#141111",
            marginBottom: "0.5rem",
            fontFamily: "fantasy",
          },
        },
      ],
    },
  },
});
