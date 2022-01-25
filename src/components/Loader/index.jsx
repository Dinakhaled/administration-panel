import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoaderOverlay, LoaderWrapper } from "./styles";

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderOverlay>
        <CircularProgress />
      </LoaderOverlay>
    </LoaderWrapper>
  );
};

export default Loader;
