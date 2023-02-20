import { createTheme } from "@nextui-org/react";

const darkDefaultTheme = createTheme({
    type: "dark",
    theme: {
        fonts: {
            sans: "Rubik, sans-serif",
        },
        colors: {
            // generic colors
            white: "#1B1B1A",
            black: "#212121",

            cardColor: "#2A2B2B",

            blue50: "#FFFFFF",
            blue100: "#EFF1FE",
            blue200: "#CACEFB",
            blue300: "#A4ABF8",
            blue400: "#7E88F5",
            blue500: "#5865F2",
            blue600: "#2435EE",
            blue700: "#101FCA",
            blue800: "#0C1796",
            blue900: "#080F62",

            red50: "#FDEAEA",
            red100: "#FBD7D8",
            red200: "#F8B2B3",
            red300: "#F48D8E",
            red400: "#F1676A",
            red500: "#ED4245",
            red600: "#E11519",
            red700: "#AE1113",
            red800: "#7B0C0E",
            red900: "#480708",

            error: "$red500",
        },
    },
});

export default darkDefaultTheme;
