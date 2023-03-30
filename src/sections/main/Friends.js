import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, Stack, Tab, Tabs } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { FetchFriendRequests, FetchFriends, FetchUsers } from "../../redux/slices/app";

const UsersList = () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(FetchUsers());
    }, []);

    return (
        // render user component
        <></>
    );
};

const FriendsList = () => {
    const dispatch = useDispatch();

    const { friends } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(FetchFriends());
    }, []);

    return (
        // render friends list component
        <></>
    );
};

const RequestsList = () => {
    const dispatch = useDispatch();

    const { friendRequests } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(FetchFriendRequests());
    }, []);

    return (
        // render requrest list component
        <></>
    );
};

const Friends = ({ open, handleClose }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ p: 4 }}
        >
            {/* <DialogTitle>{"Friends"}</DialogTitle> */}
            <Stack p={2} sx={{ width: "100%" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Explore" />
                    <Tab label="Friends" />
                    <Tab label="Requests" />
                </Tabs>
            </Stack>
            <DialogContent>
                <Stack sx={{ height: "100%" }}>
                    <Stack spacing={2.4}>
                        {(() => {
                            switch (value) {
                                case 0: // display all users in this list
                                    return <UsersList />;

                                case 1: // display friends in this list
                                    return <FriendsList />;

                                case 2: // display request in this list
                                    return <RequestsList />;

                                default:
                                    break;
                            }
                        })()}
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default Friends;
