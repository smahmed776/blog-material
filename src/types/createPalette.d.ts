import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface TypeText {
        light? : string;
        muted? : string;
    }
}