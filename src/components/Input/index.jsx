import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

import { TextField, Box } from "@mui/material";

const Input = ({ name, label }) => {
  return (
    <div>
      <Field name={name}>
        {({ field }) => (
          <TextField
            sx={{ display: "block", mb: 2 }}
            fullWidth
            id={name}
            label={label}
            variant="outlined"
            {...field}
          />
        )}
      </Field>
      <Box sx={{ color: "error.main" }}>
        <ErrorMessage component="span" name={name} />
      </Box>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};

Input.defaultProps = {
  label: "label"
};

export default Input;
