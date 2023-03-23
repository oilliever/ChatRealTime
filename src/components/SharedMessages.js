import { faker } from "@faker-js/faker";
import { Box, IconButton, Stack, Typography, Tabs, Tab, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { SHARRED_DOCS, SHARRED_LINKS } from "../data";
import { UpdateSidebarType } from "../redux/slices/app";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

const SharedMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                {/**Header */}
                <Box
                    sx={{
                        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                        width: "100%",
                        backgroundColor:
                            theme.palette.mode === "light" ? "f8faff" : theme.palette.background,
                    }}>
                    <Stack
                        direction={"row"}
                        sx={{ height: "100%", p: 2 }}
                        alignItems="center"
                        spacing={3}>
                        <IconButton
                            onClick={() => {
                                dispatch(UpdateSidebarType("CONTACT"));
                            }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">Sharred Messages</Typography>
                    </Stack>
                </Box>
                {/**Body */}
                <Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY: "scroll",
                    }}
                    p={3}
                    spacing={value === 1 ? 1 : 3}>
                    {(() => {
                        switch (value) {
                            case 0:
                                //Media
                                return (
                                    <Grid container spacing={2}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                                            return (
                                                <Grid item xs={4}>
                                                    <img
                                                        src={faker.image.avatar()}
                                                        alt={faker.name.fullName()}
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                );
                            case 1:
                                //Links
                                return SHARRED_LINKS.map((el) => <LinkMsg el={el} />);
                            case 2:
                                //Docs
                                return SHARRED_DOCS.map((el) => <DocMsg el={el} />);

                            default:
                                break;
                        }
                    })()}
                </Stack>
            </Stack>
        </Box>
    );
};
export default SharedMessages;
