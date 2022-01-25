import * as Yup from "yup";

export const USER_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required.")
});

export const getInitialValues = (user) => {
  return {
    name: user?.name || "",
    email: user?.email || ""
  };
};
