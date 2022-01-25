import React from "react";
import PropTypes from "prop-types";
import { Paper, Stack, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const EmptyState = ({ message }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100%"
      my={5}
    >
      <Paper
        sx={{
          width: {
            xs: "100%",
            md: "50%",
            padding: "80px",
            textAlign: "center"
          }
        }}
      >
        <HelpIcon fontSize="large" sx={{ mb: 2 }} />
        <Typography component="h5" variant="h5">
          {message}
        </Typography>
      </Paper>
    </Stack>
  );
};

EmptyState.propTypes = {
  message: PropTypes.string
};

EmptyState.defaultProps = {
  message: "No records are found!"
};

export default EmptyState;
