import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DialogContent, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  CustomDialog,
  CustomDialogTitle,
  IconWrapper,
  CustomSubTitle,
  CustomDialogHeader,
  CustomDialogActions
} from "./styles";

const Modal = ({
  children,
  title,
  subtitle,
  isOpen,
  actions,
  triggerClose
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    triggerClose(false);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <CustomDialog open={open} onClose={handleClose} fullWidth>
      <IconWrapper>
        <CloseIcon onClick={handleClose} fontSize="large" />
      </IconWrapper>
      <CustomDialogHeader>
        <CustomDialogTitle>{title}</CustomDialogTitle>
        <CustomSubTitle>{subtitle}</CustomSubTitle>
      </CustomDialogHeader>
      {children && <DialogContent>{children}</DialogContent>}
      {actions.length > 0 && (
        <CustomDialogActions>
          <Stack spacing={2} direction="row">
            {actions.map((action) => action)}
          </Stack>
        </CustomDialogActions>
      )}
    </CustomDialog>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isOpen: PropTypes.bool,
  actions: PropTypes.array,
  triggerClose: PropTypes.func
};

Modal.defaultProps = {
  isOpen: false,
  actions: [],
  triggerClose: () => {}
};

export default Modal;
