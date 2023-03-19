import {
    Box,
    IconButton,
    Stack,
    styled,
    TextField,
    InputAdornment,
} from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { React } from "react";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",
    },
}));
const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            p={2}
            sx={{
                width: "100%",
                backgroundColor:
                    theme.palette.mode === "light"
                        ? "#f8faff"
                        : theme.palette.background.default,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            }}
        >
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <StyledInput
                    fullWidth
                    placeholder="Write a message..."
                    variant="filled"
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <LinkSimple />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <Smiley />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box
                    sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                    }}
                >
                    <Stack
                        sx={{ height: "100%", width: "100%" }}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <IconButton>
                            <PaperPlaneTilt color="#ffffff" />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};
export default Footer;
