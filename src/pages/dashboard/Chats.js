import { Box, IconButton, Stack, Typography, Button, Divider } from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass, Users } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { ChatList } from "../../data";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";

const Chats = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const handCloseDialog = () => {
        setOpenDialog(false);
    };
    const handOpenDialog = () => {
        setOpenDialog(true);
    };
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    width: 320,
                    backgroundColor: theme.palette.mode === "light" ? "#f8faff" : theme.palette.background.paper,
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                }}
            >
                <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
                    <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                        <Typography variant="h5">Chats</Typography>
                        <Stack direction={"row"} alignItems="center" spacing={1}>
                            <IconButton
                                onClick={() => {
                                    handOpenDialog();
                                }}
                            >
                                <Users />
                            </IconButton>
                            <IconButton>
                                <CircleDashed />
                            </IconButton>
                        </Stack>
                    </Stack>

                    <Stack sx={{ width: "100%" }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709ce6" />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Stack>
                    <Stack spacing={1}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                            <ArchiveBox size={24} />
                            <Button>Archive</Button>
                        </Stack>

                        <Divider />
                    </Stack>

                    <Stack spacing={2} direction={"column"} sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
                        <Stack spacing={2.4}>
                            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                                Pinned
                            </Typography>
                            {ChatList.filter((el) => el.pinned).map((el) => {
                                return <ChatElement {...el} />;
                            })}
                        </Stack>

                        <Stack spacing={2.4}>
                            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                                All Chats
                            </Typography>
                            {ChatList.filter((el) => !el.pinned).map((el) => {
                                return <ChatElement {...el} />;
                            })}
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            {openDialog && <Friends open={openDialog} handleClose={handCloseDialog} />}
        </>
    );
};

export default Chats;
