import { PropTypes } from "prop-types";
//form
import { useFormContext, Controller } from "react-hook-form";
//@mui
import { TextField } from "@mui/material";

RHFTextField.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFTextField({ name, helperText, ...other }) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ feild, fieldState: { error } }) => (
                <TextField
                    {...feild}
                    fullWidth
                    // value={typeof feild.value === "number" && feild.value === 0 ? "" : feild.value}
                    error={!!error}
                    helperText={error ? error.message : helperText}
                    {...other}
                />
            )}
        />
    );
}
