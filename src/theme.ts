import { Roboto, Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    link: React.CSSProperties;
    small: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    link?: React.CSSProperties;
    small?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    action: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
    small: true;
  }
}

export const primaryColor = "#9164CC";
export const grayColor = "#969191";
export const whiteColor = "#ffffff";
export const dangerColor = red.A400;

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: dangerColor,
    },
    error: {
      main: dangerColor,
    },
    text: {
      primary: "#000",
    },
    divider: "#BDBDBD",
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    body1: {
      fontSize: "14px",
      fontWeight: "400",
    },
    h1: {
      fontSize: "30px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "25px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "700",
    },
    subtitle1: {
      fontSize: "15px",
      fontWeight: "700",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "700",
    },
    caption: {
      color: "#969191",
      fontSize: "15px",
      fontWeight: "500",
    },
    link: {
      color: "#000 !important",
      fontSize: "14px",
    },
    small: {
      color: "#969191",
      fontSize: "11px",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: primaryColor,
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#7E4E9D",
            },
          },
        },
      ],
    },
  },
});
