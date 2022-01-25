import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar as MuiSnackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { showHideSnackbar } from "store/snackbar/actions";

const Alert = forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  );
});

const Snackbar = () => {
  const dispatch = useDispatch();
  const { showSnackbar, message, type } = useSelector(
    (state) => state.snackbar
  );

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      showHideSnackbar({
        isOpen: false,
        type,
        message
      })
    );
  };

  return (
    <MuiSnackbar
      open={showSnackbar}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
