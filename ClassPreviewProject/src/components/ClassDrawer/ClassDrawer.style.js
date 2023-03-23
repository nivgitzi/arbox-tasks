import { Drawer, Paper, styled } from "@mui/material";

export const SideDrawer = styled(Drawer)({
  width: "20vw",
  height: "100vh",
});

export const SideDrawerContent = styled(Paper)({
  width: "20vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const ClassActions = styled("div")({
  width: "60%",
  height: "5vh",
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
});

export const CancelClassSection = styled("div")({
  color: "#FF0B37",
  display: "flex",
  flexDirection: "row",
});

export const EditSection = styled("div")({
  color: "#000000",
  display: "flex",
  flexDirection: "row",
});
