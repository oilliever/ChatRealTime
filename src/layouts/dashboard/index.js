import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const isAuthenticated = false;

const DashboardLayout = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    if (!isLoggedIn) {
        return <Navigate to="/auth/login" />;
    }
    return (
        <Stack direction={"row"}>
            {/*SideBar */}
            <SideBar />
            <Outlet />
        </Stack>
    );
};

export default DashboardLayout;
