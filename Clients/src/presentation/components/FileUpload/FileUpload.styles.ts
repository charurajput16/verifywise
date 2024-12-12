import { styled } from "@mui/material/styles";
import {Dialog, DialogContent} from "@mui/material";

export const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    width: "384px",
    height: "338px",
    borderRadius: "4px",
    padding: "32px", 
    overflow: "visible", 
  },
}));

export const StyledDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 0, 
  gap: "16px", 
}));

export const Container = styled("div")({
  width: "349px",
 height:"300px",
  padding:"32px",
  
  
});

export const DragDropArea = styled("div")({
  width: "320px",
  height: "190px",
  border: "1px dashed #D1D5DB",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
  position: "relative",
  gap:2,


  "& .uppy-Container": {
    display: "none !important",
  },
 
  //remove default uppy container while maintaining drag drop functionality
});

export const Icon = styled("img")({
  width: "40px",
  height: "40px",
});

export const ButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});
