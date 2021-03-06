import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import Modal from "components/Modal";

import {
  deleteUserAction,
  deleteUserIdAction
} from "store/users/actions";
import { showHideSnackbar } from "store/snackbar/actions";

const DeleteUser = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const id = useSelector((state) => state.users.deleteUserId);

  useEffect(() => {
    id ? setIsOpen(true) : setIsOpen(false);
  }, [id]);

  const handleDelete = () => {
    dispatch(deleteUserAction(id));
    handleClose();
    dispatch(
      showHideSnackbar({
        isOpen: true,
        type: "success",
        message: "User deleted successfully"
      })
    );
  };

  const handleClose = () => {
    setIsOpen(false);
    dispatch(deleteUserIdAction(false));
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Delete user"
      subtitle={"Are you sure you want to delete this user?"}
      triggerClose={handleClose}
      actions={[
        <Button
          key={2}
          variant="outlined"
          content="Cancel"
          size="large"
          onClick={handleClose}
        >
          Cancel
        </Button>,
        <Button
          key={0}
          variant="contained"
          content="Mark as sold"
          size="large"
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
      ]}
    />
  );
};

DeleteUser.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

export default DeleteUser;
