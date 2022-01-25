import { styled } from "@mui/material/styles";

export const LoaderWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: "9999",
  "& > * + *": {
    marginLeft: theme.spacing(2)
  }
}));

export const LoaderOverlay = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.7)"
});
