import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_PATHS } from "utils/pathNames";

import { Form, Formik } from "formik";
import { Button, Paper, Stack, Typography } from "@mui/material";
import _ from "lodash";

import Input from "components/Input";

import { addUserAction, editUserAction } from "store/users/actions";
import { getInitialValues, USER_SCHEMA } from "./validations";
import { styles } from "./style";
import { showHideSnackbar } from "store/snackbar/actions";

const { formWrapper, formikForm } = styles;

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.list);
  const selectedUser = _.find(usersList, ["id", +id]) || {};

  const handleSubmit = ({ name, email }) => {
    const user = {
      ...selectedUser,
      id: id ? +id : Math.floor(Math.random() * (300 - 11) + 11),
      name,
      email
    };
    !id
      ? dispatch(addUserAction(user))
      : dispatch(editUserAction(user));
    navigate(ROUTE_PATHS.usersList);
    dispatch(
      showHideSnackbar({
        isOpen: true,
        type: "success",
        message: !id ? "User Added" : "User Updated"
      })
    );
  };

  return (
    <>
      <Typography sx={{ my: 3 }} variant="h4" component="h4">
        {!id ? "Add user" : "Edit user"}
      </Typography>
      <Paper sx={formWrapper}>
        <Formik
          initialValues={getInitialValues(selectedUser)}
          onSubmit={handleSubmit}
          validationSchema={USER_SCHEMA}
        >
          {() => (
            <Form style={formikForm}>
              <Stack spacing={4}>
                <Input name="name" label="Name" />
                <Input name="email" label="Email" />
              </Stack>
              <Stack
                spacing={2}
                sx={{ mt: 4 }}
                justifyContent={"end"}
                direction={"row"}
              >
                <Button
                  variant="outlined"
                  size="large"
                  color="error"
                  onClick={() => navigate(ROUTE_PATHS.usersList)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export default UserForm;
