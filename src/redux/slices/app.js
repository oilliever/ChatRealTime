import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    sideBar: {
        open: false,
        type: "CONTACT", // can be CONTACT, STARRED, SHARED
    },
    snackbar: {
        open: null,
        severity: null,
        message: null,
    },
    users: [],
    friends: [],
    friendRequests: [],
    chat_type: null,
    room_id: null,
};

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // Toggle Sidebar
        toggleSideBar(state, action) {
            state.sideBar.open = !state.sideBar.open;
        },
        updateSideBarType(state, action) {
            state.sideBar.type = action.payload.type;
        },

        openSnackBar(state, action) {
            state.snackbar.open = true;
            state.snackbar.severity = action.payload.severity;
            state.snackbar.message = action.payload.message;
        },
        closeSnackBar(state, action) {
            state.snackbar.open = false;
            state.snackbar.severity = null;
            state.snackbar.message = null;
        },
        updateUsers(state, action) {
            state.users = action.payload.users;
        },
        updateFriends(state, action) {
            state.friends = action.payload.friends;
        },
        updateFriendRequests(state, action) {
            state.friendRequests = action.payload.requests;
        },
        selectConversation(state, action) {
            state.chat_type = "individual";
            state.room_id = action.payload.room_id;
        },
    },
});

// Reducer
export default slice.reducer;

export function ToggleSidebar() {
    return async (dispatch, getState) => {
        dispatch(slice.actions.toggleSideBar());
    };
}
export function UpdateSidebarType(type) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateSideBarType({ type }));
    };
}

export function showSnackbar({ severity, message }) {
    return async (dispatch, getState) => {
        dispatch(
            slice.actions.openSnackBar({
                message,
                severity,
            })
        );

        setTimeout(() => {
            dispatch(slice.actions.closeSnackBar());
        }, 4000);
    };
}
export const closeSnackBar = () => async (dispatch, getState) => {
    dispatch(slice.actions.closeSnackBar());
};

export function FetchUsers() {
    return async (dispatch, getState) => {
        await axios
            .get(
                "/user/get-users",

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getState().auth.token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                dispatch(slice.actions.updateUsers({ users: response.data.data }));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}
export function FetchFriends() {
    return async (dispatch, getState) => {
        await axios
            .get(
                "/user/get-friends",

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getState().auth.token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                dispatch(slice.actions.updateFriends({ friends: response.data.data }));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}
export function FetchFriendRequests() {
    return async (dispatch, getState) => {
        await axios
            .get(
                "/user/get-requests",

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getState().auth.token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                dispatch(slice.actions.updateFriendRequests({ requests: response.data.data }));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export const SelectConversation = (room_id) => {
    return (dispatch, getState) => {
        dispatch(slice.actions.selectConversation(room_id));
    };
};
