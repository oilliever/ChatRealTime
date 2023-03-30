import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ThemeSettings from "./components/settings";
import ThemeProvider from "./theme";
import Router from "./routes";
import { closeSnackBar } from "./redux/slices/app";

const vertical = "bottom";
const horizontal = "center";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
    const dispatch = useDispatch();
    const { open, message, severity } = useSelector((state) => state.app);
    return (
        <>
            <ThemeProvider>
                <ThemeSettings>
                    {" "}
                    <Router />{" "}
                </ThemeSettings>
            </ThemeProvider>
            {message && open ? (
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    autoHideDuration={4000}
                    key={vertical + horizontal}
                    onClose={() => {
                        dispatch(closeSnackBar());
                    }}
                >
                    <Alert
                        onClose={() => {
                            dispatch(closeSnackBar());
                        }}
                        severity={severity}
                        sx={{ width: "100%" }}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            ) : (
                <></>
            )}
        </>
    );
}

export default App;
