import { Stack, Box } from "@mui/material";
import React from "react";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { useTheme } from "@mui/material/styles";

const GeneralApp = () => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} sx={{ width: "100%" }}>
            <Chats />

            <Box
                sx={{
                    height: "100%",
                    width: "calc(100vw - 420px)",
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#f0f4fa"
                            : theme.palette.background.default,
                }}
            >
                <Conversation />
            </Box>
        </Stack>
    );
};

export default GeneralApp;
