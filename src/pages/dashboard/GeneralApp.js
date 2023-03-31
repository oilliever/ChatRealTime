import React from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, Box, Typography } from "@mui/material";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
import NoChatSVG from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
    const theme = useTheme();
    const { sideBar, chat_type, room_id } = useSelector((store) => store.app);
    return (
        <Stack direction={"row"} sx={{ width: "100%" }}>
            <Chats />

            <Box
                sx={{
                    height: "100%",
                    width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
                    backgroundColor: theme.palette.mode === "light" ? "#f0f4fa" : theme.palette.background.default,
                }}
            >
                {room_id !== null && chat_type === "individual" ? (
                    <Conversation />
                ) : (
                    <Stack spacing={2} sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent={"center"}>
                        <NoChatSVG />
                        <Typography variant="subtitle2">Select a conversation or start new one</Typography>
                    </Stack>
                )}
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
