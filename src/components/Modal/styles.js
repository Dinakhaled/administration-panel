import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Typography
} from "@mui/material";

export const IconWrapper = styled(Box)(({ theme }) => ({
  textAlign: "right",
  marginBottom: 9,
  "& svg": {
    cursor: "pointer",
    color: theme.palette.common.black
  }
}));

export const CustomDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    padding: "20px 30px",
    borderRadius: 15
  },
  "& .MuiDialogContent-root": {
    padding: "0 0 20px 0"
  }
}));

export const CustomDialogTitle = styled(DialogTitle)(() => ({
  padding: 0,
  fontSize: 24,
  fontWeight: 500
}));

export const CustomSubTitle = styled(Typography)(() => ({
  fontSize: 16
}));

export const CustomDialogHeader = styled("div")(({ theme }) => ({
  marginBottom: 15,
  color: theme.palette.grey[700]
}));

export const CustomDialogActions = styled(DialogActions)(() => ({
  marginTop: 15,
  marginBottom: 15,
  padding: 0
}));
