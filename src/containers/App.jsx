import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import AppRoutes from "routes/Routes";

import Loader from "components/Loader";
import Snackbar from "components/Snackbar";

import { styles } from "./AppStyle";
const { mainWrapper } = styles;

const App = () => {
  const isLoading = useSelector((state) => state.loader);

  return (
    <>
      {isLoading && <Loader />}
      <Snackbar />
      <Box sx={mainWrapper}>
        <Typography variant="h2" component="h2">
          Dashboard
        </Typography>

        {AppRoutes}
      </Box>
    </>
  );
};

export default App;
