import React from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
    const theme = useTheme();
    const { sideBar } = useSelector((store) => store.app);
    return (
        <Stack direction={"row"} sx={{ width: "100%" }}>
            <Chats />

            <Box
                sx={{
                    height: "100%",
                    width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#f0f4fa"
                            : theme.palette.background.default,
                }}>
                <Conversation />
            </Box>
            {/**Contact */}
            {sideBar.open &&
                (() => {
                    switch (sideBar.type) {
                        case "CONTACT":
                            return <Contact />;
                        case "STARRED":
                            return <StarredMessages />;
                        case "SHARRED":
                            return <SharedMessages />;
                        default:
                            break;
                    }
                })()}
        </Stack>
    );
};

export default GeneralApp;
