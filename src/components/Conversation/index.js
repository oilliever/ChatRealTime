import { Box, Stack } from "@mui/material";
import React from "react";

import Header from "../../components/Conversation/Header";
import Footer from "../../components/Conversation/Footer";
import Conversations from "../../pages/dashboard/Conversation";

const Conversation = () => {
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
            {/*Chat header */}
            <Header />

            {/*Msg */}
            <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflow: "scroll" }}>
                <Conversations menu={true} />
            </Box>
            {/*Chat footer */}
            <Footer />
        </Stack>
    );
};

export default Conversation;
