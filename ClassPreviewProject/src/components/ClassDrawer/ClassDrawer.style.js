import { Button, Drawer, Paper, styled } from "@mui/material";

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
  padding: "0 1vw",
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

export const ClassHeader = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 0 4vh 1vw",
});

export const ClassImage = styled("img")({
  display: "flex",
  width: "120px",
  paddingBottom: "0.5vh",
});

export const ClassTitle = styled("div")({
  display: "flex",
  width: "fit-content",
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "#000000",
});

export const DetailsContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  padding: "4vh 1vw 2vh",
});

export const DetailSection = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "4vh 1vw",
});

export const KnowladgeSection = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "left",
  padding: "4vh 1vw",
});

export const KnowladgeTitle = styled("div")({
  display: "flex",
  fontSize: "1.1rem",
  fontWeight: 600,
  paddingBottom: "1vh",
});

export const KnowladgeDesc = styled("div")({
  display: "flex",
  fontWeight: 200,
  fontSize: "0.9rem",
});

export const ParticipantsHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "4vh 1vw",
});

export const AddClientBtn = styled(Button)({
  display: "flex",
  backgroundColor: "#F6F6F6",
  textTransform: "unset",
  color: "#000000",
});

export const AddClientBtnText = styled("span")({
  marginRight: "3vw",
});
